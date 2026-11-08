import { Ionicons } from "@expo/vector-icons";
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  showSearch?: boolean;
  centerTitle?: boolean;
};

export default function AppHeader({
  title,
  showSearch = true,
  centerTitle = false,
}: Props) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text
          style={[styles.title, centerTitle && styles.titleCentered]}
          numberOfLines={1}
        >
          {title}
        </Text>

        {showSearch && (
          <Ionicons name="search-outline" size={22} color="#111827" />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop:
      Platform.OS === "android" ? (StatusBar.currentHeight ?? 24) + 12 : 56,
    paddingBottom: 14,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#111827",
    letterSpacing: 0.2,
  },
  titleCentered: {
    flex: 1,
    textAlign: "center",
  },
});
