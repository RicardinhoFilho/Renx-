import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`

  margin-top:${RFValue(50)}PX;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;