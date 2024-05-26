import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
const ThemeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        size="lg"
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ThemeSwitch;
