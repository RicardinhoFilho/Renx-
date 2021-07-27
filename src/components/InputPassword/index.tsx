import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { TextInputProps } from "react-native";
import {
  Container,
  InputText,
  IconContainer,
  ChangeVisibility,
} from "./styles";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
}

export function InputPassword({ iconName, ...rest }: InputProps) {
  const theme = useTheme();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function handleSetPasswordVisbility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <Container>
      <IconContainer>
        <Feather
          name={iconName}
          size={RFValue(24)}
          color={theme.colors.text_detail}
        />
      </IconContainer>
      <InputText secureTextEntry={!isPasswordVisible} {...rest}></InputText>
      <ChangeVisibility onPress={handleSetPasswordVisbility}>
        <Feather
          name={isPasswordVisible ? "eye-off" : "eye"}
          size={RFValue(24)}
          color={theme.colors.text_detail}
        />
      </ChangeVisibility>
    </Container>
  );
}
