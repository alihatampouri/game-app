import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import genres from "../data/genres";
import { Genre } from "../types/genre";

const useGenres = () =>
    useQuery<FetchResponse<Genre>, Error>({
        queryKey: ["genres"],
        queryFn: () => apiClient.get("/genres").then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000, // 24h
        initialData: { count: genres.length, results: genres },
    });

export default useGenres;
