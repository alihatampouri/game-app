import { useQuery } from "@tanstack/react-query";
import { Genre } from "../types/genre";
import apiClient, { FetchResponse } from "../services/api-client";

const useGenres = () =>
    useQuery<FetchResponse<Genre>, Error>({
        queryKey: ["genres"],
        queryFn: () => apiClient.get("/genres").then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000, // 24h
    });

export default useGenres;
