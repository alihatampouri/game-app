import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "../types/platform";
import platforms from "../data/platforms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
    useQuery<FetchResponse<Platform>, Error>({
        queryKey: ["paltforms"],
        queryFn: apiClient.getAll,
        staleTime: ms("24h"), //24h
        initialData: platforms,
    });

export default usePlatforms;
