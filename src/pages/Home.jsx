import { Flex } from "@chakra-ui/react";
import ToolBar from "../components/home/ToolBar";
import TaskTable from "../components/home/TaskTable";

const Home = () => {
  return (
    <Flex p={10} flexDir={"column"} gap={5}>
      <ToolBar />
      <TaskTable />
    </Flex>
  );
};

export default Home;
