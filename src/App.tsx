import { registerRootComponent } from "expo";
import { StatusBar } from "react-native";

import { Navigation } from "./navigation";

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Navigation />
    </>
  );
}

registerRootComponent(App);
