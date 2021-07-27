import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;

  margin-bottom: ${RFValue(8)}px;
`;

export const IconContainer = styled.View<Props>`
  height: ${RFValue(65)}px;
  width: ${RFValue(55)}px;
  justify-content: center;
  align-items: center;

  border-right-width: ${RFValue(2)}px;
  border-right-color: ${({ theme }) => theme.colors.background_primary};

  background-color: ${({ theme }) => theme.colors.background_secondary};

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-bottom-width: ${RFValue(2)}px;
      border-bottom-color: ${({ theme }) => theme.colors.main};
    `}
`;

export const InputText = styled.TextInput<Props>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  padding: 0 ${RFValue(25)}px;

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-bottom-width: ${RFValue(2)}px;
      border-bottom-color: ${({ theme }) => theme.colors.main};
    `}
`;
