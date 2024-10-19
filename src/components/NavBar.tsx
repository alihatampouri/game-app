import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
    return (
        <HStack justifyContent="space-between" padding="1rem">
            <Image src={logo} width="50px" />
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
