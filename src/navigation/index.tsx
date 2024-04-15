import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./routes";

export function Navigation() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
