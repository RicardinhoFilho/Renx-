import React from "react";

import { useWindowDimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { ConfirmButton } from "../../components/ConfirmButton";

import { Container, Content, Title, Message, Footer } from "./styles";

export function SchedulingComplete() {
  const { width } = useWindowDimensions();
  return (
    <Container>
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
        <ConfirmButton title={"OK"} />
      </Footer>
    </Container>
  );
}
