import { Movie } from "../../data/models/movie-model";

export interface GetMoviesRepo {
  getMovies(): Promise<Movie[]>;
}
