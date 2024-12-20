import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <HStack spacing="2rem" padding="1rem 2rem">
            <Link to="/">
                <Image src={logo} width="50px" objectFit="cover" />
            </Link>
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
