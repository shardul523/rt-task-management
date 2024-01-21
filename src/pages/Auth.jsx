import { useRef, useMemo, useState } from "react";

import { signInUser, signUpUser } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";
import { Loader, Form } from "../components/common";
import { Center } from "@chakra-ui/react";

const Auth = ({ purpose = "sign-in" }) => {
  const emailInputRef = useRef();
  const passInputRef = useRef();
  const isSignIn = useMemo(() => purpose === "sign-in", [purpose]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const formConfig = useMemo(() => {
    return {
      title: isSignIn ? "Sign In" : "Sign Up",
      formSize: "20%",
      headingSize: "lg",
      fields: [
        {
          name: "Email",
          type: "email",
          ref: emailInputRef,
          id: "email",
        },
        {
          name: "Password",
          type: "password",
          ref: passInputRef,
          id: "pass",
        },
      ],
      buttons: [
        {
          name: isSignIn ? "Login" : "Register",
          onclick: async () => {
            const email = emailInputRef.current.value;
            const pass = passInputRef.current.value;

            if (!email || !pass) return;

            let error;
            setIsLoading(true);

            if (isSignIn) {
              const result = await signInUser(email, pass);
              error = result.error;
            } else {
              const result = await signUpUser(email, pass);
              error = result.error;
            }

            if (error) console.log(error);

            setIsLoading(false);

            if (!error) navigate("/", { replace: true });
          },
        },
      ],
    };
  }, [isSignIn, navigate]);

  if (isLoading) return <Loader />;

  return (
    <Center minH={"80vh"}>
      <Form formConfig={formConfig} />;
    </Center>
  );
};

export default Auth;
