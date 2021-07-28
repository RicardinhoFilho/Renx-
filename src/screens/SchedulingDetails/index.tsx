import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

import { Alert } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Acessory } from "../../components/Acessory";
import { Button } from "../../components/Button";

import CarDTO from "../../dtos/CarDTO";

import { getAcessoryIcon } from "../../utils/getAcessoryIcon";

import { MarkedDatesProps } from "../../components/Calendar";
import { format } from "date-fns";
import { getPlataformDate } from "../../utils/getPlataformDate";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Acessoryes,
  RentalPeriod,
  CalendaryIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPriceDetails,
  RentalPriceLabel,
  RentalPriceQuota,
  RentalPriceTotal,
  Footer,
} from "./style";
import api from "../../service/api";
interface Params {
  car: CarDTO;

  dates: string[];
}
interface RentalPeriod {
  start: string;
  end: string;
}

export function SchedulingDetails() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();

  const [rentalPeriod, setRentalPeriod] = useState({} as RentalPeriod);

  const { car, dates } = route.params as Params;
  const [load, setLoad] = useState(false);

  async function handleConfirmRental() {
    setLoad(true);
    const response = await api.get(`/schedules_bycars/${car.id}`);
    // console.log(response.data);

    const unavailable_dates = [...response.data.unavailable_dates, ...dates];

    api.post("schedules_byuser", {
      user_id: 1,
      car,
      startDate: format(getPlataformDate(new Date(dates[0])), "dd/MM/yyyy"),
      endDate: format(
        getPlataformDate(new Date(dates[dates.length - 1])),
        "dd/MM/yyyy"
      ),
    });

    api
      .put(`/schedules_bycars/${car.id}`, { id: car.id, unavailable_dates })
      .then(() =>
        navigation.navigate("Confirmation", {
          title: "Carro Alugado",
          message: `Agora você só precisa ir \n
          até a concessionária da RENTX \n
          pergar seu automóvel`,
          nextScreenRoute: "Home",
        })
      )
      .catch(() => {
        Alert.alert("Não foi possível completar seu agendamento!");
        setLoad(false);
      });
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlataformDate(new Date(dates[0])), "dd/MM/yyyy"),
      end: format(
        getPlataformDate(new Date(dates[dates.length - 1])),
        "dd/MM/yyyy"
      ),
    });
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>
        <Acessoryes>
          {car.accessories.map((acessory) => (
            <Acessory
              name={acessory.name}
              icon={getAcessoryIcon(acessory.type)}
            />
          ))}
        </Acessoryes>

        <RentalPeriod>
          <CalendaryIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendaryIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPriceLabel>Total</RentalPriceLabel>

        <RentalPriceDetails>
          <RentalPriceQuota>
            R$ {car.rent.price} x{dates.length} diárias
          </RentalPriceQuota>
          <RentalPriceTotal>
            R$ {car.rent.price * dates.length}
          </RentalPriceTotal>
        </RentalPriceDetails>
      </Content>

      <Footer>
        <Button
          title="Alugar Agora"
          color={theme.colors.succes}
          onPress={handleConfirmRental}
          enabled={!load}
          loading={load}
        />
      </Footer>
    </Container>
  );
}
