import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, TouchableOpacity, Linking } from "react-native";
import { Feather } from "@expo/vector-icons";
import * as MailComposer from "expo-mail-composer";

import {
  Container,
  Header,
  Incident,
  IncidentProperty,
  IncidentPropertyFirst,
  IncidentValue,
  ContactBox,
  HeroTitle,
  HeroDescription,
  Actions,
  Action,
  ActionText
} from "./styles";

import logo from "../../assets/logo.png";

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const { incident } = route.params;
  const message = `Olá ${
    incident.name
  }, estou entrando em contato pois gostaria de ajudar no caso "${
    incident.title
  }" com o valor de ${Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(incident.value)}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message
    });
  }

  function sendWpp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
    );
  }

  return (
    <Container>
      <Header>
        <Image source={logo} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color={"#e02041"} />
        </TouchableOpacity>
      </Header>

      <Incident>
        <IncidentPropertyFirst>Ong:</IncidentPropertyFirst>
        <IncidentValue>
          {incident.name} de {incident.city}/{incident.uf}
        </IncidentValue>

        <IncidentProperty>Caso:</IncidentProperty>
        <IncidentValue>{incident.title}</IncidentValue>

        <IncidentProperty>Valor:</IncidentProperty>
        <IncidentValue>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(incident.value)}
        </IncidentValue>
      </Incident>

      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>

        <HeroDescription>Entre em contato:</HeroDescription>
        <Actions>
          <Action onPress={sendWpp}>
            <ActionText>WhatsApp</ActionText>
          </Action>
          <Action onPress={sendMail}>
            <ActionText>E-mail</ActionText>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  );
}
