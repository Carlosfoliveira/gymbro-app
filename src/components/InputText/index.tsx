import { Text, TextInput, TextInputProps, View } from "react-native";

export interface InputTextInterface extends TextInputProps {
  label: string;
}

export function InputText({ label, ...props }: InputTextInterface) {
  return (
    <View>
      <Text className="text-gray-700 ml-4">{label}</Text>
      <TextInput
        className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
        {...props}
      />
    </View>
  );
}
