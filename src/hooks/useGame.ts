import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type Game from "../entities/Game";

const apiClient = new ApiClient<Game>("/games");

const useGame = (slug: string) => {
  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug)
  });
};

export default useGame;
