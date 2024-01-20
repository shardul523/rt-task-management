import { Outlet, Navigate } from "react-router-dom";

import Loader from "../components/common/Loader";
import { useAuthUser } from "../context";

const AuthenticationRoute = () => {
  const { user, isLoading } = useAuthUser();

  if (isLoading) return <Loader />;

  if (user) return <Navigate to={"/"} />;

  return <Outlet />;
};

export default AuthenticationRoute;
