import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: Relevance
            </MenuButton>
            <MenuList>
                <MenuItem>item</MenuItem>
                <MenuItem>item</MenuItem>
                <MenuItem>item</MenuItem>
                <MenuItem>item</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default SortSelector;
