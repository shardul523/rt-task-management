import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInUser, signUpUser } from "../../firebase/auth";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
} from "@chakra-ui/react";

import { FormField, Loader, PrimaryButton } from "../components/common";

const Auth = ({ purpose }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const onClickHandler = async () => {
    if (!email || !pass) return;

    setIsLoading(true);

    let error;

    if (purpose === "sign-in") {
      const result = await signInUser(email, pass);
      error = result.error;
    } else {
      const result = await signUpUser(email, pass);
      error = result.error;
    }

    if (error) {
      setError(true);
    }

    setIsLoading(false);

    if (!error) navigate("/", { replace: true });
  };

  if (isLoading) return <Loader />;

  return (
    <Center minH={"80vh"} flexDir={"column"}>
      {!!error && (
        <Alert status="error" w={350}>
          <AlertIcon />
          <AlertTitle>Invalid Credentials</AlertTitle>
          {/* <AlertDescription>Please try again</AlertDescription> */}
        </Alert>
      )}
      <Card minW={"30%"}>
        <CardHeader>
          <Heading color={"blackAlpha.700"} size={"md"}>
            {purpose === "sign-in" ? "Sign In" : "Sign Up"}
          </Heading>
        </CardHeader>
        <CardBody display={"flex"} flexDir={"column"} gap={5}>
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
          <ButtonGroup>
            <PrimaryButton w={"100%"} onClick={onClickHandler}>
              {purpose === "sign-in" ? "Login" : "Register"}
            </PrimaryButton>
          </ButtonGroup>
        </CardBody>
      </Card>
    </Center>
  );
};

export default Auth;
