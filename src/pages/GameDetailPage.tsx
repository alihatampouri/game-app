import {
    GridItem,
    Heading,
    HStack,
    SimpleGrid,
    Spinner,
    Text,
    VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
    const { slug } = useParams();
    const { data: game, isLoading, error } = useGame(slug!);

    if (isLoading)
        return (
            <HStack justifyContent="center">
                <Spinner />
                <Text>Loading...</Text>
            </HStack>
        );

    if (error || !game) throw error;

    return (
        <>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="1rem">
                <GridItem>
                    <Heading>{game.name}</Heading>
                    <ExpandableText limit={300}>
                        {game.description_raw}
                    </ExpandableText>
                    <GameAttributes game={game} />
                </GridItem>
                <VStack spacing="1rem">
                    <GameTrailer gameId={game.id} />
                    <GameScreenshots gameId={game.id} />
                </VStack>
            </SimpleGrid>
        </>
    );
};

export default GameDetailPage;
