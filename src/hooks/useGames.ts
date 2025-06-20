import type { GameQuery } from "@/App";
import useData from "./useData";

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

const useGames = ({ genre, platform, sortOrder, searchText }: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: genre?.id,
        platforms: platform?.id,
        ordering: sortOrder,
        search: searchText
      }
    },
    [genre?.id, platform?.id, sortOrder, searchText]
  );

export default useGames;
