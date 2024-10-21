import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../types/game";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
    const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;

    return (
        <Heading as="h1" marginY="1rem" fontSize="5xl">
            {heading}
        </Heading>
    );
};

export default GameHeading;
