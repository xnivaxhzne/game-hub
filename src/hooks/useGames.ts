import type { GameQuery } from "@/App";
import { useQuery } from "@tanstack/react-query";
import type { Platform } from "./usePlatforms";
import ApiClient from "@/services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new ApiClient<Game>("/games");

const useGames = (query: GameQuery) => {
  const { genre, platform, sortOrder, searchText } = query;
  return useQuery({
    queryKey: ["games", genre?.id, platform?.id, sortOrder, searchText],
    queryFn: () => {
      return apiClient.getAll({
        params: {
          genres: genre?.id,
          parent_platforms: platform?.id,
          ordering: sortOrder,
          search: searchText
        }
      });
    }
  });
};

export default useGames;
