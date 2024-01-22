import { Flex } from "@chakra-ui/react";
import { ButtonLink } from "../common";

const ToolBar = () => {
  return (
    <Flex>
      <ButtonLink to={"/new-task"}>Add New Task</ButtonLink>
    </Flex>
  );
};

export default ToolBar;
