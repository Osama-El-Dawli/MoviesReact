import { Movie } from "@/features/home/data/models/movie-model";

export interface SavedMoviesRepo {
  saveMovie(key:string, movie:Movie): Promise<void>;
  getSavedMovies():Promise <Movie[]>;
  removeMovie(key:string):Promise<void>;
}