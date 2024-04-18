import { ActivityIndicator } from "react-native";

export interface LoadingProps {
  size: number;
}

export function Loading() {
  return <ActivityIndicator size="small" color="#374151" />;
}
