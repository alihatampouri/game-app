import { Alert, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../types/game";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return <Alert status="error">{error.message}</Alert>;

    return (
        <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            padding="20px"
            spacing="1.5rem"
        >
            {isLoading
                ? skeletons.map((skeleton) => (
                      <GameCardContainer key={skeleton}>
                          <GameCardSkeleton />
                      </GameCardContainer>
                  ))
                : data?.results.map((game) => (
                      <GameCardContainer key={game.id}>
                          <GameCard game={game} />
                      </GameCardContainer>
                  ))}
        </SimpleGrid>
    );
};

export default GameGrid;
