import { HStack, Icon } from "@chakra-ui/react";
import { FaRegStar, FaStar } from "react-icons/fa";

interface Props {
    score: number;
}

const RatingScore = ({ score }: Props) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= score) {
            stars.push(<Icon key={i} as={FaStar} color="yellow.400" />);
        } else {
            stars.push(<Icon key={i} as={FaRegStar} color="gray.300" />);
        }
    }

    return (
        <HStack spacing="0" marginBottom="0.5rem">
            {stars}
        </HStack>
    );
};

export default RatingScore;
