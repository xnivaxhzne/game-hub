import type { GameQuery } from "@/App";
import apiClient, { type FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (query: GameQuery) => {
  const { genre, platform, sortOrder, searchText } = query;
  return useQuery({
    queryKey: ["games", query],
    queryFn: () => {
      return apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: genre?.id,
            parent_platforms: platform?.id,
            ordering: sortOrder,
            search: searchText
          }
        })
        .then((res) => res.data);
    }
  });
};

export default useGames;
