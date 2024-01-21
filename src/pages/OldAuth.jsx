import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInUser, signUpUser } from "../../firebase/auth";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
} from "@chakra-ui/react";

import { FormField, PrimaryButton } from "../components/common";

const Auth = ({ purpose = "sign-in" }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const isSignIn = useMemo(() => purpose === "sign-in", [purpose]);

  const onClickHandler = useCallback(async () => {
    if (!email || !pass) return;

    setIsLoading(true);

    let error;

    if (isSignIn) {
      const result = await signInUser(email, pass);
      error = result.error;
    } else {
      const result = await signUpUser(email, pass);
      error = result.error;
    }

    if (error) {
      console.log(error);
      setError(true);
      setEmail("");
      setPass("");
    }

    setIsLoading(false);

    if (!error) navigate("/", { replace: true });
  }, [email, pass, isSignIn, navigate]);

  return (
    <Center minH={"80vh"} flexDir={"column"}>
      {error && (
        <Alert status="error" w={350}>
          <AlertIcon />
          <AlertTitle>Invalid Credentials</AlertTitle>
        </Alert>
      )}
      <Card minW={"30%"}>
        <CardHeader>
          <Heading color={"blackAlpha.700"} size={"md"}>
            {isSignIn ? "Sign In" : "Sign Up"}
          </Heading>
        </CardHeader>
        <CardBody as={"form"} display={"flex"} flexDir={"column"} gap={5}>
          <FormField
            fieldName={"Email"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormField
            fieldName={"Password"}
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <PrimaryButton
            isLoading={isLoading}
            w={"100%"}
            onClick={onClickHandler}
          >
            {isSignIn ? "Login" : "Register"}
          </PrimaryButton>
        </CardBody>
      </Card>
    </Center>
  );
};

export default Auth;
