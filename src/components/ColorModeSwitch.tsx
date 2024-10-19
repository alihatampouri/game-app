import { IconButton, useColorMode } from "@chakra-ui/react";
import { TbMoon, TbSun } from "react-icons/tb";

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <IconButton
            aria-label="Toggle color mode"
            onClick={toggleColorMode}
            icon={colorMode === "dark" ? <TbSun /> : <TbMoon />}
            fontSize="1.5rem"
        />
    );
};

export default ColorModeSwitch;
