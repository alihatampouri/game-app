import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Game, GameQuery } from "../types/game";

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => {
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: ({ pageParam }) =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genre?.id,
                    platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam,
                },
            }),
        staleTime: 60 * 60 * 1000, //1h
        initialPageParam: 1,
        getNextPageParam: (lastPage, pages) => {
            return lastPage.next ? pages.length + 1 : undefined;
        },
    });
};

export default useGames;
