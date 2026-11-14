import { Movie } from "@/features/home/data/models/movie-model";
import { StorageService } from "@/shared/storage/storage-service";
import { SavedMoviesRepo } from "../../domain/repos/saved-movies-repo";

export class SavedMoviesRepoImpl implements SavedMoviesRepo {
  constructor(private storage: StorageService) {}

  async saveMovie(key: string, movie: Movie): Promise<void> {
    const item = JSON.stringify(movie);
    await this.storage.saveItem(key, item);
  }

  async getSavedMovies(): Promise<Movie[]> {
    const data = await this.storage.getAllData();
    return data.map((item: string) => JSON.parse(item) as Movie);
  }

  async removeMovie(key: string): Promise<void> {
    await this.storage.deletItem(key);
  }
}
