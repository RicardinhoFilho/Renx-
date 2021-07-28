import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { useNavigation } from "@react-navigation/native";

import * as Yup from "yup";

import {
  Container,
  Header,
  Steps,
  Title,
  Subtitle,
  Form,
  FormTitle,
} from "./styles";

export function SignUpFirstStep() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [driverLicense, setDriverLicense] = useState("");

  async function handleSecondStep() {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Nome é obrigatório"),
        email: Yup.string()
          .email("E-mail inválido")
          .required("Email é obrigatório"),
        driverLicense: Yup.string().required("CNH é obrigatória"),
      });
      const data = { name, email, driverLicense };
      await schema.validate(data);

      navigation.navigate("SignUpSecondStep",{user:data});
    } catch (error) {
      error instanceof Yup.ValidationError
        ? Alert.alert('Opa',error.message)
        : Alert.alert('Ops',"Não foi possivel cadastrar seus dados");
    }
  }
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
            <FormTitle>1. Dados</FormTitle>
            <Input
              iconName="user"
              placeholder="Nome"
              onChangeText={setName}
              value={name}
            />
            <Input
              iconName="mail"
              placeholder="Email"
              keyboardType={"email-address"}
              onChangeText={setEmail}
              value={email}
            />
            <Input
              iconName="credit-card"
              placeholder="CNH"
              keyboardType="numeric"
              onChangeText={setDriverLicense}
              value={driverLicense}
            />

            <Button
              title={"Próximo"}
              onPress={handleSecondStep}
              enabled={!!name && !!email && !!driverLicense}
            />
          </Form>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
