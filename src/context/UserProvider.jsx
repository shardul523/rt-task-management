import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../../firebase/index";
import { UserContext } from ".";
import { getLocalUser, setLocalUser } from "../utility";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getLocalUser());
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const userChangeHandler = (user) => {
      console.log(user);
      setIsLoading(true);
      if (user) setLocalUser(user);
      else setLocalUser(null);
      setUser(getLocalUser());
      setIsLoading(false);

      console.log(user);
    };

    const unsubscribeAuthStateListener = onAuthStateChanged(
      auth,
      userChangeHandler
    );

    setIsLoading(false);

    return () => unsubscribeAuthStateListener();
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
