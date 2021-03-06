import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { SchedulingDetails } from "../screens/SchedulingDetails";
import { Confirmation } from "../screens/Confirmation";
import { SignIn } from "../screens/SignIn";
import { SignUpFirstStep } from "../screens/SignUp/SignUpFirstStep";
import { SignUpSecondStep } from "../screens/SignUp/SignUpSecondStep";

const { Navigator, Screen } = createStackNavigator();
export function AuthRotes() {
  return (
    <Navigator headerMode="none">
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUpFirstStep" component={SignUpFirstStep} />
      <Screen name="SignUpSecondStep" component={SignUpSecondStep} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  );
}
