import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
    return (
        <HStack spacing="2rem" padding="1rem 2rem">
            <Image src={logo} width="50px" />
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
