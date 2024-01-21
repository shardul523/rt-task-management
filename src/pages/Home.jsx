import { Flex } from "@chakra-ui/react";
import { ButtonLink } from "../components/common";

const Home = () => {
  return (
    <Flex>
      <ButtonLink to="/new-task">Add New Task</ButtonLink>
    </Flex>
  );
};

export default Home;
