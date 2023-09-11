import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <div>
      <HStack padding="0.75rem">
        <Image src={logo} boxSize="3.75rem" />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
}

export default NavBar;
