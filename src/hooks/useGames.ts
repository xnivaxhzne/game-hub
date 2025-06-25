import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient from "@/services/api-client";
import ms from "ms";
import useGameQueryStore from "@/store";
import type { Game } from "../entities/Game";

const apiClient = new ApiClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  const { genreId, platformId, sortOrder, searchText } = gameQuery;
  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) => {
      return apiClient.getAll({
        params: {
          genres: genreId,
          parent_platforms: platformId,
          ordering: sortOrder,
          search: searchText,
          page: pageParam
        }
      });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h")
  });
};

export default useGames;
