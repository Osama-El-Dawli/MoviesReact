import { router } from "expo-router";
import LottieView from "lottie-react-native";

export default function Index() {
  return (
    <LottieView
      source={require("@/assets/lotties/splash.json")}
      style={{ width: "100%", height: "100%" }}
      autoPlay
      loop={false}
      onAnimationFinish={() => router.replace("/(tabs)")}
    />
  );
}
