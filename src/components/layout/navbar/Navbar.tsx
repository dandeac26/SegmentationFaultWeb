import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import RightContent from "./rightContent/RightContent";

const Navbar: React.FC = () => {
  return (
    <Flex bg="brand.100" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="/images/applogo.png" height="30px" />
        <Image
          src="/images/title.svg"
          height="46px"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      <SearchInput />
      <RightContent />
    </Flex>
  );
};
export default Navbar;
