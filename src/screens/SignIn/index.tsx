import React, { useState } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import * as Yup from "yup";

import { useTheme } from "styled-components";

import { Container, Header, Subtitle, Title, Form, Footer } from "./styles";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const theme = useTheme();
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required("E-mail").email("Digite um e-mail válido"),
        password: Yup.string().required("A senha é obrigatória"),
      });

      await schema.validate({ email, password });
      console.log("deu certo seu email");
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Ops", error.message);
      } else {
        Alert.alert(
          "Erro na autenticação",
          "Ocorreu um erro ao fazer login, verifique suas credenciais"
        );
      }
    }
  }

  function handleNewAccount() {
    navigation.navigate("SignUpFirstStep");
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      {/*AGORA TODA A VEZ QUE O KEYBOARD SUBIR NOSSA TELA TAMBÉM SUBIRÁ NÃO BLOQUEANDO A VISÃO DO USUÁRIO*/}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
          <Header>
            <Title>
              Estamos {"\n"}
              quase lá.
            </Title>

            <Subtitle>
              Faça seu login para começar {"\n"}
              uma experiência incrível.
            </Subtitle>
          </Header>
          <Form>
            <Input
              iconName="mail"
              placeholder={"E-mail"}
              keyboardType={"email-address"}
              autoCorrect={false}
              autoCapitalize={"none"}
              onChangeText={setEmail}
              value={email}
            />
            <InputPassword
              iconName={"lock"}
              placeholder={"Senha"}
              onChangeText={setPassword}
              value={password}
            />
          </Form>
          <Footer>
            <Button
              title="Login"
              onPress={handleSignIn}
              enabled={!!email && !!password}
            />
            <Button
              title="Criar conta gratuita"
              onPress={handleNewAccount}
              loading={false}
              color={theme.colors.background_primary}
              light={true}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
