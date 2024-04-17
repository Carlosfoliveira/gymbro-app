import Dumbbell from "@icons/Dumbbell";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useCallback, useState } from "react";
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
import { auth } from "@/config/firebase";
import { useBotToTopAnimation } from "@/hooks";

export function Login() {
  const { navigate } = useNavigation();
  const animatedStyles = useBotToTopAnimation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(async () => {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log("got error: ", err.message);
      }
    }
  }, [email, password]);

  return (
    <DismissKeyboard>
      <View className="flex-1 bg-primary">
        <SafeAreaView className="flex">
          <View className="flex-row justify-start m-6">
            <BackButton />
          </View>
          <View className="flex-row justify-center">
            <Dumbbell width={150} height={150} />
          </View>
        </SafeAreaView>
        <Animated.View
          style={animatedStyles}
          className="flex-1 bg-white px-8 pt-8 rounded-tl-[50px] rounded-tr-[50px]"
        >
          <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">Email</Text>
            <TextInput
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              inputMode="email"
              keyboardType="email-address"
              autoComplete="email"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
            <Text className="text-gray-700 ml-4">Senha</Text>
            <TextInput
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Enter Password"
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
            <TouchableHighlight className="flex items-end mb-5">
              <Text className="text-gray-700">Esqueceu sua senha?</Text>
            </TouchableHighlight>
            <Button onPress={handleSubmit}>Login</Button>
          </View>
          <View className="my-4 flex-row justify-center">
            <Text className="text-gray-400 font-semibold">
              Não tem uma conta?
            </Text>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigate("SignUp")}
            >
              <Text className="font-semibold text-orange-400">Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </DismissKeyboard>
  );
}
