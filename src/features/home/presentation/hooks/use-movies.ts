import { useQuery } from "@tanstack/react-query";
import { GetMoviesRepoImpl } from "../../data/repo-impl/get-movies-repo-impl";
import { movieRepo } from "@/shared/di/container";

export const useMovies = () => {
    return useQuery({
        queryKey: ['movies'],
        queryFn: () => movieRepo.getMovies()
    })
};