import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const NavBar = () => {
    return (
        <HStack>
            <Image src={logo} width="60px" />
            <Text>Rmgsm</Text>
        </HStack>
    );
};

export default NavBar;
