import { HStack, Image } from "@chakra-ui/react";
import logo from "./../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" />
      </Link>
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
