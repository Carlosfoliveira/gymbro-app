import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home, Welcome, Login, SignUp } from "@/pages";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Welcome"
    >
      <Screen name="Home" component={Home} />
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Login" component={Login} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}
