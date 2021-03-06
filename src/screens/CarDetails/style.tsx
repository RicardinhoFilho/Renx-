import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  margin-top: ${getStatusBarHeight() + RFValue(18)}px;
  margin-left: ${RFValue(24)}px;
`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + RFValue(32)}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: RFValue(24),
    alignItems: "center",
  },

  showsVerticalScrollIndicator: false,
})``;
export const Details = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${RFValue(38)}px;
`;
export const Description = styled.View``;
export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};

  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;
export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};

  font-size: ${RFValue(25)}px;
`;
export const Rent = styled.View``;
export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};

  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;
export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.main};

  font-size: ${RFValue(25)}px;
`;

export const About = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;

  text-align: justify; /*Deixar texto alinhado, sem espa??os*/

  margin-top: ${RFValue(23)}px;
`;

export const Acessoryes = styled.View`
  width: 100%;

  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_primary};
  /*            cima             dos lados             embaixo*/
  padding: ${RFValue(24)}px ${RFValue(24)}px ${getBottomSpace() + RFValue(24)}px;
`;
