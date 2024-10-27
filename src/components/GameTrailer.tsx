import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
    gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
    const { data, error, isLoading } = useTrailers(gameId);

    if (isLoading) return <Spinner />;

    if (error) throw error;

    const firstItem = data?.results[0];
    if (!firstItem) return null;

    return (
        <video src={firstItem.data[480]} poster={firstItem.preview} controls />
    );
};

export default GameTrailer;
