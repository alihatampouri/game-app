import {
    FaAndroid,
    FaApple,
    FaLinux,
    FaPlaystation,
    FaWindows,
    FaXbox,
} from "react-icons/fa";
import { HStack, Icon } from "@chakra-ui/react";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { Platform } from "../types/platform";

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,
        nintendo: SiNintendo,
    };

    return (
        <HStack marginY="1rem">
            {platforms.map((platform) => (
                <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
            ))}
        </HStack>
    );
};

export default PlatformIconList;
