import Dumbbell from "@icons/Dumbbell";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import { BackButton, Button, DismissKeyboard } from "@/components";
import { useBotToTopAnimation } from "@/hooks";

export function SignUp() {
  const { navigate } = useNavigation();
  const animatedStyles = useBotToTopAnimation();

  return (
    <DismissKeyboard>
      <View className="flex-1 bg-primary">
        <SafeAreaView className="flex">
          <View className="flex-row justify-start m-6">
            <BackButton />
          </View>
          <View className="flex-row justify-center">
            <Dumbbell width={100} height={100} />
          </View>
        </SafeAreaView>
        <Animated.View
          style={animatedStyles}
          className="flex-1 bg-white px-8 pt-8 rounded-tl-[50px] rounded-tr-[50px]"
        >
          <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">Nome</Text>
            <TextInput
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              inputMode="text"
              autoComplete="name"
              value="Carlos"
            />
            <Text className="text-gray-700 ml-4">Sobrenome</Text>
            <TextInput
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              inputMode="text"
              autoComplete="family-name"
              value="Oliveira"
            />
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
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-4"
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              value="123456"
              placeholder="Enter Password"
            />
            <Button>Cadastrar</Button>
          </View>
          <View className="my-4 flex-row justify-center">
            <Text className="text-gray-400 font-semibold">
              Já tem uma conta?
            </Text>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigate("Login")}
            >
              <Text className="font-semibold text-orange-400"> Logar</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </DismissKeyboard>
  );
}
