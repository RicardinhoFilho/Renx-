import React, { useState } from "react";
import ExpoLoading from "expo-app-loading";

import { ThemeProvider } from "styled-components";

import {
  useFonts,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";

import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";

import { SchedulingComplete } from "./src/screens/SchedulingComplete";
import theme from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return < ExpoLoading/>;
  }

  return (
    <ThemeProvider theme={theme}>
      <SchedulingComplete />
    </ThemeProvider>
  );
}
