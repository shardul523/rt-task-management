import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import AuthenticationRoute from "./routes/AuthenticationRoute";
import HomeRoute from "./routes/HomeRoute";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MainLayout from "./components/layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "*",
    element: <MainLayout />,
    children: [
      {
        path: "auth",
        element: <AuthenticationRoute />,
        children: [
          {
            path: "sign-in",
            element: <SignIn />,
          },
          {
            path: "sign-up",
            element: <SignUp />,
          },
          {
            path: "*",
            element: <Navigate to={"/auth/sign-in"} replace />,
          },
        ],
      },
      {
        path: "*",
        element: <HomeRoute />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
