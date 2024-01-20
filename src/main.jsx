import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import UserProvider from "./context/UserProvider.jsx";
import {
  ChakraBaseProvider,
  theme as chakraTheme,
  extendBaseTheme,
} from "@chakra-ui/react";

const {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Form,
  FormLabel,
  Input,
  Heading,
} = chakraTheme.components;

const colors = chakraTheme.colors;

const theme = extendBaseTheme({
  components: {
    Box,
    ButtonGroup,
    Button,
    Flex,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Form,
    FormLabel,
    Input,
    Heading,
  },
  colors,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ChakraBaseProvider theme={theme}>
        <App />
      </ChakraBaseProvider>
    </UserProvider>
  </React.StrictMode>
);
