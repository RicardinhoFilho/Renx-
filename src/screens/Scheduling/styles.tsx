import styled, { css } from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

interface DateValueProps {
  dateIsSelected: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`

  width: 100%;
  height: ${RFValue(325)}px;
  background-color: ${({ theme }) => theme.colors.header};

  justify-content: center;
 
  padding: ${RFValue(25)}px;
    padding-top: ${getStatusBarHeight() + RFValue(14)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(32)}PX;
`;

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;


  margin: ${RFValue(32)}px 0px;
`;
export const DateInfo = styled.View`
  width: 30%;
`;
export const DateTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
`;
export const DateValue = styled.Text<DateValueProps>`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;

  ${({ dateIsSelected, theme }) =>
    !dateIsSelected &&
    css`
      border-bottom-width: ${RFValue(1)}px;
      border-bottom-color: ${theme.colors.text};
    `}
`;


export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: RFValue(24),
  },

  showsVerticalScrollIndicator: false,
})``;
export const   Footer = styled.View`
    padding: ${RFValue(24)}px;
`;