import type { GameQuery } from "@/App";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { Platform } from "./usePlatforms";
import ApiClient from "@/services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms?: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new ApiClient<Game>("/games");

const useGames = (query: GameQuery) => {
  const { genre, platform, sortOrder, searchText } = query;
  return useInfiniteQuery({
    queryKey: ["games", genre?.id, platform?.id, sortOrder, searchText],
    queryFn: ({ pageParam }) => {
      return apiClient.getAll({
        params: {
          genres: genre?.id,
          parent_platforms: platform?.id,
          ordering: sortOrder,
          search: searchText,
          page: pageParam
        }
      });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    }
  });
};

export default useGames;
