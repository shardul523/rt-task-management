import { Box, Flex, Heading } from "@chakra-ui/react";

import { useAuthUser } from "../../context";
import { Link } from "./Link";

export const Header = () => {
  const { user } = useAuthUser();

  return (
    <Flex as={"header"} color={"white"} bg={"blackAlpha.800"} p={5}>
      <Box w={"80%"}>
        <Heading size={"lg"}>Real Time Task Management System</Heading>
      </Box>
      <Box w={"20%"}>
        {!user && (
          <Flex flexWrap={"wrap"} gap={10} alignItems={"center"} h={"100%"}>
            <Link to="/auth/sign-in">Sign In</Link>
            <Link to="/auth/sign-up">Sign Up</Link>
          </Flex>
        )}
      </Box>
    </Flex>
  );
};
