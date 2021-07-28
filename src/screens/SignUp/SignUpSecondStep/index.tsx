import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { useTheme } from "styled-components";

import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { InputPassword } from "../../../components/InputPassword";

import {
  Container,
  Header,
  Steps,
  Title,
  Subtitle,
  Form,
  FormTitle,
  IputPasswordHandler,
} from "./styles";

export function SignUpSecondStep() {
  const theme = useTheme();
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton />
            <Steps>
              <Bullet active={true} />
              <Bullet />
            </Steps>
          </Header>

          <Title>
            Crie sua {"\n"}
            conta
          </Title>

          <Subtitle>
            Faça seu cadastro de {"\n"}
            forma rápida e fácil
          </Subtitle>
          <Form>
            <FormTitle>2. Senha</FormTitle>
            <IputPasswordHandler>
              <InputPassword iconName="lock" placeholder="Senha" />
            </IputPasswordHandler>
            <IputPasswordHandler>
              <InputPassword iconName="lock" placeholder="Confirmar Senha" />
            </IputPasswordHandler>

            <Button title={"Cadastrar"} color={theme.colors.succes} />
          </Form>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
