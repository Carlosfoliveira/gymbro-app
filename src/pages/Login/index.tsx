import Dumbbell from "@icons/Dumbbell";
import { Text, TextInput, TouchableHighlight, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BackButton, Button } from "@/components";

export function Login() {
  return (
    <View className="flex-1 bg-primary">
      <SafeAreaView className="flex">
        <View className="flex-row justify-start m-6">
          <BackButton />
        </View>
        <View className="flex-row justify-center">
          <Dumbbell width={150} height={150} />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8 rounded-tl-[50px] rounded-tr-[50px]">
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Email</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            inputMode="email"
            keyboardType="email-address"
            autoComplete="email"
            autoCapitalize="none"
            autoCorrect={false}
            value="carlos@gymbro.com"
          />
          <Text className="text-gray-700 ml-4">Senha</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            value="123456"
            placeholder="Enter Password"
          />
          <TouchableHighlight className="flex items-end mb-5">
            <Text className="text-gray-700">Esqueceu sua senha?</Text>
          </TouchableHighlight>
          <Button>Login</Button>
        </View>
      </View>
    </View>
  );
}
