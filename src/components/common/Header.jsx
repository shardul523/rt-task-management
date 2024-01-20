import { Box, Flex } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as={"header"}
      fontSize={26}
      fontWeight={"bold"}
      color={"white"}
      bg={"blackAlpha.800"}
      p={5}
    >
      <Box flexGrow={1} textAlign={"center"}>
        Real Time Task Management System
      </Box>
    </Flex>
  );
};

export default Header;
