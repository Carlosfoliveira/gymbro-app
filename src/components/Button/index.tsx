import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      className="py-3 bg-orange-400 rounded-xl"
      activeOpacity={0.6}
      {...props}
    >
      <Text className="text-xl font-bold text-center text-gray-700">
        {children}
      </Text>
    </TouchableOpacity>
  );
}
