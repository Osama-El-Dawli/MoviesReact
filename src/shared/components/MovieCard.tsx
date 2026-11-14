import { Ionicons } from "@expo/vector-icons";
import { Image as ExpoImage } from "expo-image";
import { Pressable, Text, View, StyleSheet } from "react-native";

type Props = {
  title?: string;
  overview?: string;
  rating?: number;
  posterUri?: string;
  /** Controlled saved state — when provided the component is fully controlled */
  isSaved?: boolean;
  onSavePress?: () => void;
};

export default function MovieCard({
  title = "Title",
  overview = "No overview available.",
  rating = 0,
  posterUri,
  isSaved = false,
  onSavePress,
}: Props) {
  function handleSavePress() {
    onSavePress?.();
  }
  return (
    <View style={styles.container}>
      <ExpoImage
        source={posterUri ?? require("@/assets/images/icon.png")}
        contentFit="cover"
        style={styles.image}
      />

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.overview} numberOfLines={2}>
          {overview}
        </Text>

        <View style={styles.footer}>
          <Ionicons name="star" size={14} color="#F5C518" />
          <Text style={styles.rating}>{rating.toFixed(1)}</Text>
        </View>
      </View>

      <Pressable onPress={handleSavePress} hitSlop={8} style={styles.bookmark}>
        <Ionicons
          name={isSaved ? "bookmark" : "bookmark-outline"}
          size={22}
          color={isSaved ? "#FFCC00" : "#FFCC00"}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "#FFCC00",
  },
  image: {
    width: 90,
    height: 120,
    flexShrink: 0,
    backgroundColor: "#F3F4F6",
  },
  info: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  overview: {
    fontSize: 12,
    color: "#6B7280",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 2,
  },
  rating: {
    fontSize: 12,
    fontWeight: "600",
    color: "#D97706",
  },
  bookmark: {
    paddingHorizontal: 14,
    alignSelf: "stretch",
    justifyContent: "center",
  },
});
