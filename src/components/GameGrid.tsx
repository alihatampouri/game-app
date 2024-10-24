import React from "react";
import { Alert, Button, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../types/game";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const {
        data,
        error,
        isLoading,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4];

    if (error) return <Alert status="error">{error.message}</Alert>;

    return (
        <>
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                paddingY="20px"
                spacing="1.5rem"
            >
                {isLoading
                    ? skeletons.map((skeleton) => (
                          <GameCardContainer key={skeleton}>
                              <GameCardSkeleton />
                          </GameCardContainer>
                      ))
                    : data?.pages.map((group, i) => (
                          <React.Fragment key={i}>
                              {group.results.map((game) => (
                                  <GameCardContainer key={game.id}>
                                      <GameCard game={game} />
                                  </GameCardContainer>
                              ))}
                          </React.Fragment>
                      ))}
            </SimpleGrid>
            {hasNextPage && (
                <Button
                    width="100%"
                    onClick={() => fetchNextPage()}
                    disabled={isFetchingNextPage}
                >
                    {isFetchingNextPage ? "Loading..." : "Load More"}
                </Button>
            )}
        </>
    );
};

export default GameGrid;
