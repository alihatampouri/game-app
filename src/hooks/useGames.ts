import { Game, GameQuery } from "../types/game";
import useData from "./useData";

const useGames = (gameQuery: GameQuery) =>
    useData<Game>(
        "/games",
        {
            params: {
                genres: gameQuery.genre?.id,
                platforms: gameQuery.platform?.id,
            },
        },
        [gameQuery]
    );

export default useGames;
