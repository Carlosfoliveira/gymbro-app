import { signOut } from "firebase/auth";
import { useCallback } from "react";
import { Text, View } from "react-native";

import { Button } from "@/components";
import { auth } from "@/config/firebase";

export function Home() {
  const handleLogout = useCallback(async () => {
    await signOut(auth);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-red">
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={handleLogout}>Logout</Button>
    </View>
  );
}
