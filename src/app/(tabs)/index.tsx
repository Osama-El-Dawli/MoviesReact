import { useMovies } from "@/features/home/presentation/hooks/use-movies";
import { useSavedMovies } from "@/features/saved-movies/hooks/use-saved-movies";
import AppHeader from "@/shared/components/AppHeader";
import MovieCard from "@/shared/components/MovieCard";
import { getMoviePosterUrl } from "@/shared/utils/movie-image";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  const {
    data: movies,
    isLoading,
    isError,
    error,
    isRefetching,
    refetch,
  } = useMovies();

  const { isSaved, toggleSave } = useSavedMovies();

  return (
    <View style={styles.container}>
      <AppHeader title="Discover" />
      {isLoading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#FFCC00" />
        </View>
      ) : isError ? (
        <View style={styles.center}>
          <Text>{error.message}</Text>
          <Text style={styles.tryAgain} onPress={() => refetch()}>
            Try Again
          </Text>
        </View>
      ) : (
        <FlatList
          data={movies}
          showsVerticalScrollIndicator={false}
          keyExtractor={(movie) => movie.id.toString()}
          contentContainerStyle={styles.list}
          refreshing={isRefetching}
          onRefresh={refetch}
          ListEmptyComponent={<Text>No Movies Found</Text>}
          renderItem={({ item }) => (
            <MovieCard
              title={item.title}
              posterUri={getMoviePosterUrl(item.poster_path)}
              overview={item.overview}
              rating={item.vote_average}
              isSaved={isSaved(item.id.toString())}
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
  list: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tryAgain: {
    marginTop: 8,
    color: "#FFCC00",
  },
});
