import {
    Alert,
    Button,
    Heading,
    HStack,
    Image,
    List,
    ListItem,
    Spinner,
    Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../types/genre";

interface Props {
    selectedGenre: Genre | null;
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data, error, isLoading } = useGenres();

    if (isLoading) {
        return (
            <HStack paddingY="0.5rem">
                <Spinner />
                <Text>Loading...</Text>
            </HStack>
        );
    }

    if (error) return <Alert status="error">{error}</Alert>;

    return (
        <>
            <Heading fontSize="2xl" marginBottom="1rem">
                Genres
            </Heading>
            <List>
                {data.map((genre) => (
                    <ListItem key={genre.id} paddingY="0.5rem">
                        <HStack>
                            <Image
                                boxSize="32px"
                                borderRadius={8}
                                objectFit="cover"
                                src={getCroppedImageUrl(
                                    genre.image_background,
                                    600,
                                    400
                                )}
                            />
                            <Button
                                variant="link"
                                fontWeight={
                                    genre.id === selectedGenre?.id
                                        ? "bold"
                                        : "normal"
                                }
                                fontSize="lg"
                                whiteSpace="normal"
                                textAlign="left"
                                onClick={() => onSelectGenre(genre)}
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
