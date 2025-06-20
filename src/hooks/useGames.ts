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
}

const useGames = ({ genre, platform }: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: genre?.id,
        platforms: platform?.id
      }
    },
    [genre?.id, platform?.id]
  );

export default useGames;
