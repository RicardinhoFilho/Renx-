import React from "react";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import {
  Calendar as CustomCalendar,
  LocaleConfig,
} from "react-native-calendars";

import { Container } from "./styles";
import { color } from "react-native-reanimated";
import theme from "../../styles/theme";

LocaleConfig.locales["pt-br"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    'Julho',
    "Agosto",
    "Setembro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    'Jul',
    "Ago",
    "Set",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ],
  dayNamesShort: ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"],
  today: "Hoje",
};

LocaleConfig.defaultLocale = "pt-br";

export function Calendar() {
  const theme = useTheme();
  return (
    <CustomCalendar
      renderArrow={(direction) => (
        <Feather
          size={RFValue(24)}
          color={theme.colors.shape}
          name={direction === "left" ? "chevron-left" : "chevron-right"}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: RFValue(1),
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: RFValue(10),
        marginBottom: RFValue(10),
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayHeaderFontSize: RFValue(10),
        textMonthFontFamily:theme.fonts.secondary_600,
        textMonthFontSize:RFValue(20),
        monthTextColor:theme.colors.title,

        arrowStyle: {
          marginHorizontal: -RFValue(15),
        },
      }}

      firstDay={1}//Tem como padrão começar por domingo, assim trocar o first day para segunda que como padrão é o segundo, por isso está na posição do vetor de dias
      minDate={new Date()}//Data mínima para aliguel é a de hoje
    />
  );
}
