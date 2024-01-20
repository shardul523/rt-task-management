import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

import AuthenticationRoute from "./routes/AuthenticationRoute";
import HomeRoute from "./routes/HomeRoute";
import Header from "./components/common/Header";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "auth",
    element: <AuthenticationRoute />,
    children: [
      {
        path: "sign-in",
        element: <div>Sign In Page</div>,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "*",
    element: <HomeRoute />,
  },
]);

const App = () => (
  <Flex minH={"100vh"} flexDir={"column"}>
    <Header />
    <Box flexGrow={1} as="main" bg={"blackAlpha.100"}>
      <RouterProvider router={router} />
    </Box>
  </Flex>
);

export default App;
