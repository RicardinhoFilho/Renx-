import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";

import { Container, Header, HeaderContent, TotalCars } from "./styles";
import { Car } from "../../components/Car";

export function Home() {
//https://cdn.picpng.com/audi/audi-red-a5-28597.png
  const car ={
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    thumbnail:'https://cdn.picpng.com/audi/audi-red-a5-28597.png',
  }

  const car2 ={
    brand: 'PORSHEE',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    thumbnail:'https://freepngimg.com/thumb/porsche/9-2-porsche-png-picture.png',
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <Car data={car}/>
      <Car data={car2}/>
    </Container>
  );
}
