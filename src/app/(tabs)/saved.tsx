import AppHeader from "@/shared/components/AppHeader";
import { StyleSheet, Text, View } from "react-native";

export default function SavedScreen() {
  return (
    <View style={styles.container}>
      <AppHeader title="Saved" showSearch={false} centerTitle={true} />
      <View style={styles.content}>
        <Text style={styles.empty}>No saved movies yet.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  empty: {
    fontSize: 14,
    color: "#9CA3AF",
  },
});
