import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { CiLight, CiDark } from "react-icons/ci";

const ThemeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        size="lg"
        colorScheme="green"
      />
      {colorMode === "dark" ? <CiDark size="30px" /> : <CiLight size="30px" />}
    </HStack>
  );
};

export default ThemeSwitch;
