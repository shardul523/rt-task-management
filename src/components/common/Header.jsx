import { Box, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";

import { useAuthUser } from "../../context";
import { ButtonLink, PrimaryButton } from ".";
import { signOutUser } from "../../../firebase/auth";

export const Header = () => {
  const { user } = useAuthUser();
  const [isLoading, setIsLoading] = useState(false);

  const signOutHandler = async () => {
    setIsLoading(true);
    await signOutUser();
    setIsLoading(false);
  };

  return (
    <Flex as={"header"} color={"white"} bg={"blackAlpha.800"} p={5}>
      <Box w={"80%"}>
        <Heading size={"lg"}>Real Time Task Management System</Heading>
      </Box>
      <Box w={"20%"}>
        {!user && (
          <Flex flexWrap={"wrap"} gap={10} alignItems={"center"} h={"100%"}>
            <ButtonLink colorScheme={"whiteAlpha"} to={"/auth/sign-in"}>
              Sign In
            </ButtonLink>
            <ButtonLink colorScheme={"whiteAlpha"} to={"/auth/sign-up"}>
              Sign Up
            </ButtonLink>
          </Flex>
        )}
        {user && (
          <PrimaryButton
            colorScheme={"whiteAlpha"}
            isLoading={isLoading}
            onClick={signOutHandler}
          >
            Sign Out
          </PrimaryButton>
        )}
      </Box>
    </Flex>
  );
};
