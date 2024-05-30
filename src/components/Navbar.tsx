import { HStack, Image } from "@chakra-ui/react";
import Duck from "../assets/img/cyberDuck.gif";
import ThemeSwitch from "./ThemeSwitch";

const NavBar = () => {
  return (
    // hstack is flex layout
    <HStack justifyContent="space-between">
      <Image
        src={Duck}
        boxSize="60px"
        padding={"5px"}
        bg="linear-gradient(135deg, #66ff66, #cc99ff)"
      ></Image>
      <ThemeSwitch />
    </HStack>
  );
};

export default NavBar;
