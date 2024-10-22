import { Card, CardBody, Heading, HStack, Image, useColorModeValue } from "@chakra-ui/react";
import { Game } from "../types/game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import RatingScore from "./RatingScore";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    const bg = useColorModeValue('gray.100', 'gray.700')

    return (
        <Card bg={bg} height="100%">
            <Image src={getCroppedImageUrl(game.background_image, 600, 400)} />
            <CardBody>
                <HStack justifyContent="space-between" marginBottom="0.5rem">
                    <PlatformIconList
                        platforms={game.parent_platforms?.map((p) => p.platform)}
                    />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <RatingScore score={game.rating_top} />
                <Heading fontSize="2xl">{game.name}</Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;
