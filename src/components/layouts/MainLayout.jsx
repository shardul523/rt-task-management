import { Flex, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import { Header } from "../common";

const MainLayout = () => {
  return (
    <Flex minH={"100vh"} flexDir={"column"}>
      <Header />
      <Box flexGrow={1} as="main" bg={"blackAlpha.100"}>
        <Outlet />
      </Box>
    </Flex>
  );
};

export default MainLayout;
