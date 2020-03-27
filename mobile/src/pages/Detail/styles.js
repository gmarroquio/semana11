import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Constants from "expo-constants";

//----------------
export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-top: ${Constants.statusBarHeight + 20}px;
  background: #333;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

//----------------

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #111;
  margin-top: 48px;
  margin-bottom: 16px;
`;

export const IncidentProperty = styled.Text`
  font-size: 14px;
  color: #bebeb4;
  font-weight: bold;
  margin-top: 24px;
`;

export const IncidentPropertyFirst = styled.Text`
  font-size: 14px;
  color: #bebeb4;
  font-weight: bold;
  margin-top: 0;
`;

export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  /* margin-bottom: 24px; */
  color: #8c8c7f;
`;

//----------------

export const ContactBox = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #111;
  margin-bottom: 16px;
`;

export const HeroTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #ecece5;
  line-height: 30px;
`;

export const HeroDescription = styled.Text`
  font-size: 15px;
  color: #8c8c7f;
  margin-top: 16px;
`;

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Action = styled(TouchableOpacity)`
  background-color: #e02041;
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

export const ActionText = styled.Text`
  color: #000;
  font-size: 15px;
  font-weight: bold;
`;
