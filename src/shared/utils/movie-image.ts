import { IMAGE_BASE_URL } from "../api/api-consts";

export const getMoviePosterUrl = (posterPath: string | null) => {
  if (!posterPath) return undefined;
  return `${IMAGE_BASE_URL}${posterPath}`;
};
