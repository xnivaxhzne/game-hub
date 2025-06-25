import genres from "@/data/genres";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import type { Genre } from "../entities/Genre";

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres
  });
};

export default useGenres;
