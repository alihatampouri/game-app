import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Game, GameQuery } from "../types/game";

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => {
    return useQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: () =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genre?.id,
                    platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                },
            }),
        staleTime: 60 * 60 * 1000, //1h
    });
};

export default useGames;
