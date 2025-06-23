import platforms from "@/data/platforms";
import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { type FetchResponse } from "./useData";
import { type Platform } from "./useGames";

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () => {
      return apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data);
    },
    initialData: {
      count: platforms.length,
      results: platforms,
    },
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};

export default usePlatforms;
