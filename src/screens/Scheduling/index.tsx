import React, { useState } from "react";
import { useTheme } from "styled-components";
import { Alert, StatusBar } from "react-native";

import { useNavigation } from "@react-navigation/native";
import {useRoute} from '@react-navigation/native';
import { format } from "date-fns";

import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import {
  Calendar,
  DayProps,
  generateInterval,
  MarkedDatesProps,
} from "../../components/Calendar";

import ArrowSvg from "../../assets/arrow.svg";


import CarDTO from "../../dtos/CarDTO";

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from "./styles";
import { getPlataformDate } from "../../utils/getPlataformDate";

 interface RentalPeriod {
  start: number;
  startFormatted: string;
  end: number;
  endFormatted: string;
}

interface Params{
  car: CarDTO
}

export function Scheduling() {
  const theme = useTheme();
  const route = useRoute();
  const {car} = route.params as Params;

  const navigation = useNavigation();
  const [lastSelectedDate, setLastSelectedDate] = useState({} as DayProps);
  const [markedDates, setMarkedDates] = useState({} as MarkedDatesProps);
  const [rentalPeriod, setRentalPeriod] = useState({} as RentalPeriod);

  

  function handleConfirmRental() {
    if (!rentalPeriod.start || !rentalPeriod.end) {
      Alert.alert(`Selecione o intervalo para alugar seu ${car.name}`);
      return;
    }
    //console.log( markedDates)
    navigation.navigate("SchedulingDetails", {
      car, dates: Object.keys(markedDates)

    });
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate; //Troca a data selecionada sempre pela menor
    let end = date;

    if (start.timestamp > end.timestamp) {
      //Se o usuário selecionar primeiro a maior e depois a menor
      start = end;
      end = start;
    }

    setLastSelectedDate(end);

    const interval = generateInterval(start, end);
    
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      start: start.timestamp,
      end: end.timestamp,
      startFormatted: format(
        getPlataformDate(new Date(firstDate)),
        "dd/MM/yyyy"
      ),
      endFormatted: format(getPlataformDate(new Date(endDate)), "dd/MM/yyyy"),
    });
  }

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={() => {}} color={theme.colors.shape} />
        <Title>
          Escolha uma{"\n"}
          data de início e{"\n"}
          fim do aluguel{"\n"}
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue dateIsSelected={!!rentalPeriod.start}>
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue dateIsSelected={!!rentalPeriod.end}>
              {rentalPeriod.endFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleConfirmRental} 
          enabled={!!rentalPeriod.end} />
      </Footer>
    </Container>
  );
}
