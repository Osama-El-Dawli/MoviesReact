
import { Movie } from "@/features/home/data/models/movie-model";
import { savedMoviesRepo } from "@/shared/di/container";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

const QUERY_KEY = ["SavedMovies"] as const;

export function useSavedMovies() {
  const queryClient = useQueryClient();

  const {
    data: savedMovies = [],
    isLoading,
    isError,
    error,
  } = useQuery<Movie[]>({
    queryKey: QUERY_KEY,
    queryFn: () => savedMoviesRepo.getSavedMovies(),
    staleTime: Infinity,
  });

  const saveMovie = useMutation({
    mutationFn: async (movie: Movie) => {
      await savedMoviesRepo.saveMovie(
        movie.id.toString(),
        movie
      );

      return await savedMoviesRepo.getSavedMovies();
    },
    onSuccess: (updatedMovies) => {
      queryClient.setQueryData<Movie[]>(
        QUERY_KEY,
        updatedMovies
      );
    },
    onError: (error) => {
      console.log("Save Movie Error:", error);
    },
  });

  const removeMovie = useMutation({
    mutationFn: async (movieId: number) => {
      await savedMoviesRepo.removeMovie(
        movieId.toString()
      );

      return await savedMoviesRepo.getSavedMovies();
    },
    onSuccess: (updatedMovies) => {
      queryClient.setQueryData<Movie[]>(
        QUERY_KEY,
        updatedMovies
      );
    },
    onError: (error) => {
      console.log("Remove Movie Error:", error);
    },
  });

  function isSaved(movieId: string): boolean {
    return savedMovies.some(
      (movie) => movie.id.toString() === movieId
    );
  }

  function toggleSave(movie: Movie): void {
    if (isSaved(movie.id.toString())) {
      removeMovie.mutate(movie.id);
    } else {
      saveMovie.mutate(movie);
    }
  }

  return {
    savedMovies,
    isSaved,
    toggleSave,
    saveMovie: saveMovie.mutate,
    removeMovie: removeMovie.mutate,
    isLoading,
    isError,
    error,
  };
}
