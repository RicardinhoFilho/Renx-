import React from "react";

import { StatusBar, useWindowDimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { useNavigation } from "@react-navigation/native";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { ConfirmButton } from "../../components/ConfirmButton";

import { Container, Content, Title, Message, Footer } from "./styles";

export function SchedulingComplete() {
  const navigation = useNavigation();

  function handleConfirmRental(){
    navigation.navigate('Home');
  }
  const { width } = useWindowDimensions();
  return (
    <Container>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
      <LogoSvg width={width} height={RFValue(250)} />
      <Content>
        <DoneSvg width={RFValue(80)} height={RFValue(80)} />
        <Title>Carro Alugado</Title>

        <Message>
          Agora você só precisa ir {"\n"}
          até a concessionária da RENTX {"\n"}
          pergar seu automóvel
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title={"OK"} onPress={handleConfirmRental}/>
      </Footer>
    </Container>
  );
}
