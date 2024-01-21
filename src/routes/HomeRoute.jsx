import { useAuthUser } from "../context";
import { Navigate } from "react-router-dom";

import Loader from "../components/common/Loader";
import Home from "../pages/Home";

const HomeRoute = () => {
  const { user, isLoading } = useAuthUser();

  if (isLoading) return <Loader />;

  if (!user) return <Navigate to={"/auth/sign-in"} />;

  console.log(user);
  return <Home />;
};

export default HomeRoute;
