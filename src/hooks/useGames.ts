import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import { Game, GameQuery } from "../types/game";

const useGames = (gameQuery: GameQuery) => {
    const fetchdata = () =>
        apiClient
            .get("/games", {
                params: {
                    genres: gameQuery.genre?.id,
                    platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                },
            })
            .then((res) => res.data);

    return useQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: () => fetchdata(),
        staleTime: 60 * 60 * 1000, //1h
    });
};

export default useGames;
