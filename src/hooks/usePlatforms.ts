import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "../types/platform";
import platforms from "../data/platforms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
    useQuery<FetchResponse<Platform>, Error>({
        queryKey: ["paltforms"],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000, //24h
        initialData: { count: platforms.length, results: platforms },
    });

export default usePlatforms;
