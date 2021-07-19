import { addDays } from "date-fns";
import { Platform } from "react-native";

export function getPlataformDate(date: Date) {
  if (Platform.OS === "ios") {
    return addDays(date, 1); //Estou adicionando um dia pois dentro do sistema ios nosso calendário está nos retornando 1 dia a menos. Se eu clicasse em dia 5 ele nos retornaria dia 4(só uma gambiarra msm)
  } else {
    return addDays(date, 1);
  }
}
