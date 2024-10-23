import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import platforms from "../data/platforms";
import { Platform } from "../types/platform";

const usePlatforms = () =>
    useQuery<FetchResponse<Platform>, Error>({
        queryKey: ["paltforms"],
        queryFn: () =>
            apiClient.get("/platforms/lists/parents").then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000, //24h
        initialData: { count: platforms.length, results: platforms },
    });

export default usePlatforms;
