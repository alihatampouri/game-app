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
import useGameQueryStore from "../store";

const GenreList = () => {
    const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

    const { data, error, isLoading } = useGenres();

    if (isLoading) {
        return (
            <HStack paddingY="0.5rem">
                <Spinner />
                <Text>Loading...</Text>
            </HStack>
        );
    }

    if (error) return <Alert status="error">{error.message}</Alert>;

    return (
        <>
            <Heading fontSize="2xl" marginBottom="1rem">
                Genres
            </Heading>
            <List>
                {data?.results.map((genre) => (
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
                                    genre.id === selectedGenreId
                                        ? "bold"
                                        : "normal"
                                }
                                fontSize="lg"
                                whiteSpace="normal"
                                textAlign="left"
                                onClick={() => setSelectedGenreId(genre.id)}
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
