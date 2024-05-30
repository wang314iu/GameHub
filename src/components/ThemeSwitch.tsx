import { HStack, useColorMode, IconButton } from "@chakra-ui/react";
import { CiLight, CiDark } from "react-icons/ci";

const ThemeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <IconButton
        onClick={toggleColorMode}
        aria-label="Toggle theme"
        backgroundColor="transparent"
        icon={
          colorMode === "dark" ? (
            <CiDark size="30px" />
          ) : (
            <CiLight size="30px" />
          )
        }
      ></IconButton>
    </HStack>
  );
};

export default ThemeSwitch;
