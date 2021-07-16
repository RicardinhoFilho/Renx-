import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { BorderlessButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

import { Container } from "./styles";

interface Props extends BorderlessButtonProps {
  color?: string;
}

export function BackButton({ color, ...rest }: Props) {
  const theme = useTheme();
  return (
    <Container {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={RFValue(24)}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
}
