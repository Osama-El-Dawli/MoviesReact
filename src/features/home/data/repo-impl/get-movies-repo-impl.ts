import { GetMoviesRepo } from "../../domain/repos/get-movies-repo";
import { Movie } from "../models/movie-model";
import { getPopularMovies } from "../service/movie-api";

export class GetMoviesRepoImpl implements GetMoviesRepo {
    async getMovies(): Promise<Movie[]> {
        const movies = await getPopularMovies();
        return movies.results;
    }
}