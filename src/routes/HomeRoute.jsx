import { useAuthUser } from "../context";
import { Navigate, Outlet } from "react-router-dom";

import Loader from "../components/common/Loader";

const HomeRoute = () => {
  const { user, isLoading } = useAuthUser();

  if (isLoading) return <Loader />;

  if (!user) return <Navigate to={"/auth/sign-in"} />;

  console.log(user);
  return <Outlet />;
};

export default HomeRoute;
