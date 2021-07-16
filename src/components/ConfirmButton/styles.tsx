import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  flex: 1;

  width: ${RFValue(80)}px;
  height: ${RFValue(56)}px;

  background-color: ${({ theme }) => theme.colors.shape_dark};

  align-items: center;
  justify-content: center;



  margin-bottom: ${RFValue(80)}px;

  

`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(15)}px;
`;
