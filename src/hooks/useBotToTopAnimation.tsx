import { useEffect } from "react";
import {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  ReduceMotion,
} from "react-native-reanimated";

export function useBotToTopAnimation() {
  const offset = useSharedValue(800);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));

  useEffect(() => {
    offset.value = withTiming(0, {
      duration: 600,
      easing: Easing.bezier(0.12, 0.74, 0.47, 1.03),
      reduceMotion: ReduceMotion.System,
    });
  }, [offset]);

  return animatedStyles;
}
