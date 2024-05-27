import { Platform } from "../hooks/useGames";
import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
interface Props {
  platforms: Platform[];
}

const PlatformIcons = ({ platforms }: Props) => {
  // { [key: string]: IconType } an index signature
  const mapping: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    mac: FaApple,
    xbox: FaXbox,
    linux: FaLinux,
    web: BsGlobe,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    android: FaAndroid,
  };

  return (
    <HStack margin={1}>
      {platforms.map((platform) => (
        //todo: adding id
        <Icon color="#cdccff" as={mapping[platform.slug]} />
      ))}
    </HStack>
  );
};

export default PlatformIcons;
