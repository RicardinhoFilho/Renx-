import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./app.stack.routes";
import { useAuth } from "../hooks/auth";
import { TabRoutes } from "./app.tab.routes";
import { AuthRotes } from "./auth.routes";

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <TabRoutes /> : <AuthRotes />}
    </NavigationContainer>
  );
}
