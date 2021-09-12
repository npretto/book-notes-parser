import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Leftmenu } from "../LeftMenu";

export const Layout: React.FC = ({ children }) => {
  return (
    <Flex direction="row" height="100vh" border="1px solid black">
      <Leftmenu />
      <Box flex={1} overflow="scroll">
        {children}
      </Box>
    </Flex>
  );
};
