
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { BorderlessButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import { Container } from "./styles";

interface Props extends BorderlessButtonProps {
  color?: string;
}

export function BackButton({ color, ...rest }: Props) {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  return (
    <Container {...rest} onPress={handleGoBack}>
      <MaterialIcons
        name="chevron-left"
        size={RFValue(24)}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
}