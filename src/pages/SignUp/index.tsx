import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BackButton } from "@/components";

export function SignUp() {
  return (
    <View className="flex-1 bg-primary">
      <SafeAreaView className="flex">
        <View className="flex-row justify-start m-6">
          <BackButton />
        </View>
      </SafeAreaView>
    </View>
  );
}
