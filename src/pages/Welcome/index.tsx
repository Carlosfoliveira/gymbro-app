import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "@/components";

export function Welcome() {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="flex-1 flex justify-around items-center my-4 px-7">
        <Text className="text-white font-bold text-4xl">Gym Bro 💪</Text>
        <View className="flex-row justify-center">
          <Image
            source={require("../../../assets/gym.png")}
            style={{
              width: 250,
              height: 250,
            }}
          />
        </View>

        <View className="space-y-4 flex w-full">
          <Button onPress={() => navigate("SignUp")}>Cadastre-se</Button>
          <View className="flex-row justify-center">
            <Text className="text-white font-semibold">Já tem uma conta?</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigate("Login")}
            >
              <Text className="font-semibold text-orange-400"> Logar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
