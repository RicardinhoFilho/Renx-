import React, { ReactNode } from "react";

import { AuthProvider } from "./auth";

interface AppReactProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppReactProps) {
  return <AuthProvider>{children}</AuthProvider>;
}
