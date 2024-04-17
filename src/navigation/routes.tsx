import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useAuth } from "@/hooks";
import { Home, Welcome, Login, SignUp } from "@/pages";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  const { user } = useAuth();

  if (user) {
    return (
      <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Screen name="Home" component={Home} />
      </Navigator>
    );
  } else {
    return (
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Welcome"
      >
        <Screen name="Welcome" component={Welcome} />
        <Screen name="Login" component={Login} />
        <Screen name="SignUp" component={SignUp} />
      </Navigator>
    );
  }
}
