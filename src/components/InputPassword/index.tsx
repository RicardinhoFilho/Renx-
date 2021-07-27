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
  value: string;
}

export function InputPassword({ iconName, value, ...rest }: InputProps) {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  function handleIsFocused() {
    setIsFocused(true);
  }

  function handleIsFilled() {
    setIsFocused(false);
    setIsFilled(!!value);
  }
  function handleSetPasswordVisbility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <Container isFocused={isFocused}>
      <IconContainer>
        <Feather
          name={iconName}
          size={RFValue(24)}
          color={
            isFocused || isFilled ? theme.colors.main : theme.colors.text_detail
          }
        />
      </IconContainer>
      <InputText
        secureTextEntry={!isPasswordVisible}
        onFocus={handleIsFocused}
        onBlur={handleIsFilled}
        {...rest}
      ></InputText>
      <ChangeVisibility onPress={handleSetPasswordVisbility}>
        <Feather
          name={isPasswordVisible ? "eye-off" : "eye"}
          size={RFValue(24)}
          color={
            isFocused || isFilled ? theme.colors.main : theme.colors.text_detail
          }
        />
      </ChangeVisibility>
    </Container>
  );
}
