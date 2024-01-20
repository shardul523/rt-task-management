import { ButtonGroup, Flex } from "@chakra-ui/react";
import PrimaryButton from "../components/common/PrimaryButton";
import { signOutUser } from "../../firebase/auth";
import { useState } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signOutHandler = async () => {
    setIsLoading(true);
    await signOutUser();
    setIsLoading(false);
  };

  return (
    <Flex>
      <ButtonGroup>
        <PrimaryButton isLoading={isLoading} onClick={signOutHandler}>
          Sign Out
        </PrimaryButton>
      </ButtonGroup>
    </Flex>
  );
};

export default Home;
