import { HStack, Image } from "@chakra-ui/react";
import Duck from "../assets/img/cyberDuck.gif";
import ThemeSwitch from "./ThemeSwitch";
import GameSearch from "./GameSearch";

// TODO : improve
interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack
      justifyContent="space-between"
      boxShadow="lg"
      paddingInline="unset"
      paddingX={{ base: 1, md: 5 }}
      height="67px"
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
