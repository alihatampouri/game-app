import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";
import { Genre } from "../types/genre";
import genres from "../data/genres";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
    useQuery<FetchResponse<Genre>, Error>({
        queryKey: ["genres"],
        queryFn: apiClient.getAll,
        staleTime: ms("24h"),
        initialData: genres,
    });

export default useGenres;
