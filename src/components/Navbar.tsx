import { HStack, Image, useColorModeValue } from "@chakra-ui/react";
import Duck from "../assets/img/cyberDuck.gif";
import ThemeSwitch from "./ThemeSwitch";
import GameSearch from "./GameSearch";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const bgColor = useColorModeValue("rgba(255,255,255)", "#1A202C");
  return (
    <HStack
      justifyContent="space-between"
      paddingInline="unset"
      paddingX={{ base: 1, md: 5 }}
      height="67px"
      bg={bgColor}
      boxShadow="0px 4px 25px #9c88d2"
    >
      <Image
        borderRadius={10}
        src={Duck}
        boxSize="50px"
        padding={"5px"}
        bg="linear-gradient(135deg, #66ff66, #cc99ff)"
      ></Image>
      <GameSearch onSearch={onSearch} />
      <ThemeSwitch />
    </HStack>
  );
};

export default NavBar;
