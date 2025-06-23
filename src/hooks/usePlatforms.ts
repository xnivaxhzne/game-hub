import platforms from "@/data/platforms";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    initialData: {
      count: platforms.length,
      results: platforms
    },
    staleTime: 24 * 60 * 60 * 1000 // 24 hours
  });
};

export default usePlatforms;
