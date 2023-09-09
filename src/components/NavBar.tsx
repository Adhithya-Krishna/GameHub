import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    <div>
      <HStack justifyContent="space-between" padding="0.75rem">
        <Image src={logo} boxSize="3.75rem" />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
}

export default NavBar;
