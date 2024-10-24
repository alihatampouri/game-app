import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import { GameQuery } from "../types/game";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
    const genre = useGenre(gameQuery.genreId);
    const platform = usePlatform(gameQuery.platformId);

    const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

    return (
        <Heading as="h1" marginY="1rem" fontSize="5xl">
            {heading}
        </Heading>
    );
};

export default GameHeading;
