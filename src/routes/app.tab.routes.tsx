import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Platform } from "react-native";

import { RFValue } from "react-native-responsive-fontsize";

import { Home } from "../screens/Home";
import { MyCars } from "../screens/MyCars";

import { StackRoutes } from "./app.stack.routes";

import { useTheme } from "styled-components";

import HomeSvg from "../assets/home.svg";
import CarSvg from "../assets/car.svg";
import PeopleSvg from "../assets/people.svg";

const { Navigator, Screen } = createBottomTabNavigator();
export function TabRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.main,
        inactiveTintColor: theme.colors.text_detail,
        showLabel: false,
        style: {
          paddingVertical: Platform.OS == "ios" ? RFValue(20) : 0,
          height: RFValue(78),
          backgroundColor: theme.colors.background_primary,
        },
      }}
    >
      <Screen
        name="Home"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg width={RFValue(24)} height={RFValue(24)} fill={color} />
          ),
        }}
      />

      <Screen
        name="MyCars"
        component={MyCars}
        options={{
          tabBarIcon: ({ color }) => (
            <CarSvg width={RFValue(24)} height={RFValue(24)} fill={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <PeopleSvg width={RFValue(24)} height={RFValue(24)} fill={color} />
          ),
        }}
      />
    </Navigator>
  );
}
