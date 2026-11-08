import { discoverMoviesEndPoint } from "@/shared/api/api-consts";
import { api } from "@/shared/api/axios-instance";
import { MovieResponseModel } from "../models/movie-model";

export const getPopularMovies = async (): Promise<MovieResponseModel> => {
  try {
    const response = await api.get<MovieResponseModel>(discoverMoviesEndPoint);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
