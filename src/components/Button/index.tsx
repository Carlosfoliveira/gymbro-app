import clsx from "clsx";
import { ReactNode } from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

import { Loading } from "../Loading";

export interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode;
  loading?: boolean;
}

export function Button({
  children,
  className,
  loading,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={clsx("py-3 bg-orange-400 rounded-xl h-14", className)}
      activeOpacity={0.6}
      {...props}
    >
      {loading ? (
        <View className="flex-row justify-center flex-1">
          <Loading />
        </View>
      ) : (
        <Text className="text-xl font-bold text-center text-gray-700">
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
}
