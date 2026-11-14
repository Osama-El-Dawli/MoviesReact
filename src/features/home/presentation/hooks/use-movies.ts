import { movieRepo } from "@/shared/di/container";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: () => movieRepo.getMovies(),
  });
};
