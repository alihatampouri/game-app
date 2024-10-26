import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Game } from "../types/game";

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
    const gameQuery = useGameQueryStore((s) => s.gameQuery);

    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: ({ pageParam }) =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genreId,
                    platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam,
                },
            }),
        staleTime: ms("24h"),
        initialPageParam: 1,
        getNextPageParam: (lastPage, pages) => {
            return lastPage.next ? pages.length + 1 : undefined;
        },
    });
};

export default useGames;
