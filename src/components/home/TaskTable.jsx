import { Table, TableContainer, Th, Thead, Tr } from "@chakra-ui/react";
import { useTasks } from "../../context";

const TaskTable = () => {
  const tasks = useTasks();
  console.log(tasks);
  return (
    <TableContainer bg={"white"}>
      <Table>
        <Thead>
          <Tr>
            <Th>S.No.</Th>
            <Th>Tasks</Th>
            <Th>Due Date</Th>
            <Th>Status</Th>
            <Th>View Details</Th>
          </Tr>
        </Thead>
      </Table>
    </TableContainer>
  );
};

export default TaskTable;
