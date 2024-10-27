import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
    limit: number;
    children: string;
}

const ExpandableText = ({ limit, children }: Props) => {
    const [expanded, setExpand] = useState(false);

    if (!children) return null;

    if (children.length <= limit) return <Text>{children}</Text>;

    const text = expanded ? children.substring(0, 500) + "..." : children;

    return (
        <Text>
            {text}
            <Button
                variant="link"
                fontWeight="bold"
                onClick={() => setExpand(!expanded)}
                marginLeft={1}
            >
                {expanded ? "Read More" : "Show Less"}
            </Button>
        </Text>
    );
};

export default ExpandableText;
