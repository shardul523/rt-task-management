import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../../firebase/index";
import { UserContext } from ".";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(auth.currentUser);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const userChangeHandler = (user) => {
      setIsLoading(true);
      if (user) setUser(user);
      else setUser(null);
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
