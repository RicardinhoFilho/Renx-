import React, {useState} from "react";
import { StatusBar } from "react-native";

import { useTheme } from "styled-components";

import { Container, Header, Subtitle, Title, Form, Footer } from "./styles";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";

export function SignIn() {
  const theme = useTheme();

  return (
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
          autoCapitalize={'none'}
        />
        <InputPassword iconName={'lock'} placeholder={'Senha'}/> 
      </Form>
      <Footer>
        <Button
          title="Login"
          onPress={() => {}}
          enabled={false}
          loading={false}
        />
        <Button
          title="Criar conta gratuita"
          onPress={() => {}}
          enabled={true}
          loading={false}
          color={theme.colors.background_primary}
          light={true}
        />
      </Footer>
    </Container>
  );
}
