import { Alert, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../types/genre";
import { Platform } from "../types/platform";

interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
    const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <Alert status="error">{error}</Alert>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
                padding="20px"
                spacing="1rem"
            >
                {isLoading
                    ? skeletons.map((skeleton) => (
                          <GameCardContainer key={skeleton}>
                              <GameCardSkeleton />
                          </GameCardContainer>
                      ))
                    : data.map((game) => (
                          <GameCardContainer key={game.id}>
                              <GameCard game={game} />
                          </GameCardContainer>
                      ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
