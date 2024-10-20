import {
    Alert,
    HStack,
    Image,
    List,
    ListItem,
    Spinner,
    Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
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
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY="0.5rem">
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius={8}
                            src={getCroppedImageUrl(
                                genre.image_background,
                                600,
                                400
                            )}
                        />
                        <Text fontSize="lg">{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
