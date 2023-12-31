import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <HStack>
        <Switch
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
          colorScheme="green"
        ></Switch>
        <Text whiteSpace="nowrap">Dark Mode</Text>
      </HStack>
    </div>
  );
}

export default ColorModeSwitch;
