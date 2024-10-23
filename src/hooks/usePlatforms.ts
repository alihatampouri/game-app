import { useQuery } from "@tanstack/react-query";
import { Platform } from "../types/platform";
import apiClient, { FetchResponse } from "../services/api-client";

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
    useQuery<FetchResponse<Platform>, Error>({
        queryKey: ["paltforms"],
        queryFn: () =>
            apiClient.get("/platforms/lists/parents").then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000, //24h
    });

export default usePlatforms;
