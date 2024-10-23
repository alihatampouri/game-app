import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Genre } from "../types/genre";
import genres from "../data/genres";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
    useQuery<FetchResponse<Genre>, Error>({
        queryKey: ["genres"],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000, // 24h
        initialData: { count: genres.length, results: genres },
    });

export default useGenres;
