import useScreenshots from "../hooks/useScreenshots";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
    gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
    const { data, error, isLoading } = useScreenshots(gameId);

    if (isLoading) return null;

    if (error) throw error;

    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="1rem">
            {data?.results.map((item) => (
                <Image key={item.id} src={item.image} />
            ))}
        </SimpleGrid>
    );
};

export default GameScreenshots;
