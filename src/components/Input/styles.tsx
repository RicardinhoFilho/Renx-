import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface ContainerProps{
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;

  margin-bottom: ${RFValue(8)}px;

  ${({isFocused, theme})=> isFocused && css`
    border-bottom-width:${RFValue(2)}px;
    border-bottom-color: ${({ theme }) => theme.colors.main};
  `}
`;

export const IconContainer = styled.View`
  height:${RFValue(65)}px;
  width:${RFValue(55)}px;
  justify-content:center;
  align-items: center;

  margin-right: ${RFValue(2)}px;

  background-color: ${({ theme }) => theme.colors.background_secondary};

`;

export const InputText = styled.TextInput`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  padding: 0 ${RFValue(25)}px;
`;
