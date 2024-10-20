import { Input, InputGroup, InputLeftElement, Spinner } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
    const [inputTimer, setInputTimer] = useState<number | null>(null);
    const [isLoading, setLoading] = useState(false);

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        if (inputTimer) clearInterval(inputTimer);

        const timer = setInterval(() => {
            const value = event.target.value;
            onSearch(value);

            clearInterval(timer);
            setLoading(false);
        }, 3000);
        setInputTimer(timer);
        setLoading(true);
    };

    return (
        <InputGroup>
            <InputLeftElement
                children={isLoading ? <Spinner size="sm" /> : <BsSearch />}
            />
            <Input
                onChange={handleSearch}
                borderRadius="20px"
                placeholder="Search games..."
                variant="filled"
            />
        </InputGroup>
    );
};

export default SearchInput;
