import { useSavedMovies } from "@/features/saved-movies/hooks/use-saved-movies";
import AppHeader from "@/shared/components/AppHeader";
import MovieCard from "@/shared/components/MovieCard";
import { getMoviePosterUrl } from "@/shared/utils/movie-image";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function SavedScreen() {
  const { savedMovies, toggleSave } = useSavedMovies();

  return (
    <View style={styles.container}>
      <AppHeader title="Saved" showSearch={false} centerTitle={true} />
      {savedMovies.length === 0 ? (
        <View style={styles.content}>
          <Text style={styles.empty}>No saved movies yet.</Text>
        </View>
      ) : (
        <FlatList
          data={savedMovies}
          keyExtractor={(movie) => movie.id.toString()}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <MovieCard
              title={item.title}
              posterUri={getMoviePosterUrl(item.poster_path)}
              overview={item.overview}
              rating={item.vote_average}
              isSaved={true}
              onSavePress={() => toggleSave(item)}
            />
          )}
        />
      )}
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
  list: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
});

