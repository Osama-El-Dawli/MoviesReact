import { GetMoviesRepoImpl } from "@/features/home/data/repo-impl/get-movies-repo-impl";
import { SavedMoviesRepoImpl } from "@/features/saved-movies/data/repos-impl/saved-movies-repo-impl";
import { StorageService } from "../storage/storage-service";

export const movieRepo = new GetMoviesRepoImpl();
export const storageService = new StorageService();
export const savedMoviesRepo = new SavedMoviesRepoImpl(storageService);
