import platforms from "@/data/platforms";
import apiClient, { type FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

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
      results: platforms
    },
    staleTime: 24 * 60 * 60 * 1000 // 24 hours
  });
};

export default usePlatforms;
