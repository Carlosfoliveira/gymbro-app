import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export function BackButton() {
  const { goBack } = useNavigation();

  return (
    <TouchableOpacity onPress={goBack}>
      <AntDesign name="leftcircle" size={50} color="orange" />
    </TouchableOpacity>
  );
}
