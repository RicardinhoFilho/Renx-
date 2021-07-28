import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { useTheme } from "styled-components";

import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { InputPassword } from "../../../components/InputPassword";

import { useNavigation, useRoute } from "@react-navigation/native";

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

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  };
}

export function SignUpSecondStep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();

  const { user } = route.params as Params;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleRegister() {
    if(!password || !confirmPassword){
      Alert.alert('Ops','Informe a senha e sua confirmação');
      return;
    }
    if(password != confirmPassword){
      Alert.alert('Ops','As senhas não conferem');
      return;
    }

    navigation.navigate('Confirmation', {nextScreenRoute:'SignIn', title:'Conta Criada', message:`Agora é só fazer login\ne aproveitar`})
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton />
            <Steps>
              <Bullet />
              <Bullet active={true} />
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
              <InputPassword
                iconName="lock"
                placeholder="Senha"
                onChangeText={setPassword}
                value={password}
              />
            </IputPasswordHandler>
            <IputPasswordHandler>
              <InputPassword
                iconName="lock"
                placeholder="Confirmar Senha"
                onChangeText={setConfirmPassword}
                value={confirmPassword}
              />
            </IputPasswordHandler>

            <Button
              title={"Cadastrar"}
              color={theme.colors.succes}
              enabled={!!password && !!confirmPassword}
              onPress={handleRegister}
            />
          </Form>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
