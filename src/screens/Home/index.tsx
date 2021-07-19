import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import api from "../../service/api";

import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/logo.svg";

import { Container, Header, HeaderContent, TotalCars, CarList } from "./styles";

import { Car } from "../../components/Car";
import CarDTO from "../../dtos/CarDTO";
import { Load } from "../../components/Load";

export function Home() {
  const navigation = useNavigation();
  const [cars, setCars] = useState({} as CarDTO[]);
  const [loading, setLoading] = useState(false);

  const car = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail: "https://cdn.picpng.com/audi/audi-red-a5-28597.png",
  };

  const car2 = {
    brand: "PORSHEE",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail:
      "https://freepngimg.com/thumb/porsche/9-2-porsche-png-picture.png",
  };

  function handleCarDetails() {
    navigation.navigate("CarDetails");
  }

  async function fetchCars() {
    setLoading(true);
    try {
      const { data } = await api.get("/cars");
      setCars(data);
      // console.log(cars);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCars();
    // console.log('teste')
  }, []);

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

      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item: CarDTO) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={handleCarDetails} />
          )}
        />
      )}

      {/* <Car data={car}/>
      <Car data={car2}/> */}
    </Container>
  );
}
