import {
  Keyboard,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from "react-native";

export function DismissKeyboard({
  children,
  ...props
}: TouchableWithoutFeedbackProps) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} {...props}>
      {children}
    </TouchableWithoutFeedback>
  );
}
