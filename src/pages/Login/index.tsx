import Dumbbell from "@icons/Dumbbell";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useCallback, useReducer } from "react";
import {
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
} from "react-native";
import Animated from "react-native-reanimated";

import actions from "./actions";
import {
  LoginReducer,
  LoginReducerInitialState,
  LoginReducerStateType,
} from "./reducer";

import { BackButton, Button, CustomKeyboardView } from "@/components";
import { auth } from "@/config/firebase";
import { useBotToTopAnimation } from "@/hooks";

export function Login() {
  const { navigate } = useNavigation();
  const animatedStyles = useBotToTopAnimation();

  const [state, dispatch] = useReducer(LoginReducer, LoginReducerInitialState);

  const handleUserDataChange = useCallback(
    (key: keyof LoginReducerStateType, value: string) => {
      dispatch({
        type: actions.SET_LOGIN_DATA,
        payload: {
          ...state,
          [key]: value,
        },
      });
    },
    [state],
  );

  const handleSubmit = useCallback(async () => {
    const { email, password } = state;

    if (email && password) {
      try {
        dispatch({ type: actions.LOGIN_REQUEST });
        await signInWithEmailAndPassword(auth, email, password);
        dispatch({ type: actions.LOGIN_SUCCESS });
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log("got error: ", err.message);
        dispatch({
          type: actions.LOGIN_ERROR,
          payload: { message: err.message },
        });

        if (err.message.includes("auth/invalid-credential")) {
          Alert.alert("Email ou Senha incorretos");
        } else {
          Alert.alert("Erro", err.message);
        }
      }
    }
  }, [state]);

  return (
    <View className="h-screen bg-white">
      <SafeAreaView className="flex-0 bg-primary" />
      <CustomKeyboardView className="min-h-full">
        <SafeAreaView className="flex-1 bg-white">
          <View className="bg-primary flex-1">
            <View className="bg-primary flex">
              <View className="flex-row justify-start mt-6 ml-6">
                <BackButton />
              </View>
              <View className="flex-row justify-center">
                <Dumbbell width={200} height={200} />
              </View>
            </View>
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
                  value={state.email}
                  onChangeText={(value) => handleUserDataChange("email", value)}
                />
                <Text className="text-gray-700 ml-4">Senha</Text>
                <TextInput
                  className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                  secureTextEntry
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Enter Password"
                  value={state.password}
                  onChangeText={(value) =>
                    handleUserDataChange("password", value)
                  }
                />
                <TouchableHighlight className="flex items-end mb-5">
                  <Text className="text-gray-700">Esqueceu sua senha?</Text>
                </TouchableHighlight>
                <Button onPress={handleSubmit} loading={state.loading}>
                  Login
                </Button>
              </View>
              <View className="my-4 flex-row justify-center">
                <Text className="text-gray-400 font-semibold">
                  Não tem uma conta?
                </Text>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => navigate("SignUp")}
                >
                  <Text className="font-semibold text-orange-400">
                    {" "}
                    Cadastre-se
                  </Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </View>
        </SafeAreaView>
      </CustomKeyboardView>
    </View>
  );
}
