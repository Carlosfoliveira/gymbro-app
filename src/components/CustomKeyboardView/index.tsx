import clsx from "clsx";
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
  ScrollView,
} from "react-native";

const ios = Platform.OS === "ios";

export function CustomKeyboardView({
  children,
  className,
  ...props
}: KeyboardAvoidingViewProps) {
  return (
    <KeyboardAvoidingView
      className={clsx("flex-1", className)}
      behavior={ios ? "padding" : "height"}
      {...props}
    >
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
