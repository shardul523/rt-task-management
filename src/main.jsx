import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import UserProvider from "./context/UserProvider.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import TasksProvider from "./context/TasksProvider.jsx";

// const {
//   Box,
//   Button,
//   ButtonGroup,
//   Flex,
//   Card,
//   Center,
//   CardBody,
//   CardHeader,
//   CardFooter,
//   FormLabel,
//   Input,
//   Heading,
//   Alert,
//   AlertIcon,
//   AlertTitle,
//   Link,
//   Table,
//   Thead,
//   Tbody,
//   TableContainer,
//   Tr,
//   Th,
//   Td,
// } = chakraTheme.components;

// const colors = chakraTheme.colors;

// const theme = extendBaseTheme({
//   components: {
//     Box,
//     ButtonGroup,
//     Button,
//     Flex,
//     Center,
//     Card,
//     CardBody,
//     CardHeader,
//     CardFooter,
//     FormLabel,
//     Input,
//     Heading,
//     Alert,
//     AlertIcon,
//     AlertTitle,
//     Link,
//     Table,
//     Thead,
//     Tbody,
//     TableContainer,
//     Tr,
//     Th,
//     Td,
//   },
//   colors,
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <TasksProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </TasksProvider>
    </UserProvider>
  </React.StrictMode>
);
