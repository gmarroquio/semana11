import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import api from "../../services/api";

import {
  Container,
  Header,
  HeaderText,
  B,
  Title,
  Description,
  IncidentsList,
  Incident,
  IncidentProperty,
  IncidentValue,
  DetailsButton,
  DetailsButtonText
} from "./styles";

import logo from "../../assets/logo.png";

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToDetail(incident) {
    navigation.navigate("Detail", { incident });
  }

  async function loadIncidents() {
    if (loading) return;

    if (total > 0 && incidents.length === total) return;

    setLoading(true);

    const response = await api.get("/incidents", {
      params: { page }
    });

    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers["x-total-count"]);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <Container>
      <Header>
        <Image source={logo} />
        <HeaderText>
          Total de <B>{total} casos</B>
        </HeaderText>
      </Header>

      <Title>Bem Vindo</Title>
      <Description>Escolha um dos casos abaixo para ser o herois</Description>

      <IncidentsList
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <Incident>
            <IncidentProperty>Ong:</IncidentProperty>
            <IncidentValue>{incident.name}</IncidentValue>

            <IncidentProperty>Caso:</IncidentProperty>
            <IncidentValue>{incident.title}</IncidentValue>

            <IncidentProperty>Valor:</IncidentProperty>
            <IncidentValue>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </IncidentValue>

            <DetailsButton onPress={() => navigateToDetail(incident)}>
              <DetailsButtonText>Ver Mais detalhes</DetailsButtonText>
              <Feather name="arrow-right" size={17} color="#e02041" />
            </DetailsButton>
          </Incident>
        )}
      />
    </Container>
  );
}
