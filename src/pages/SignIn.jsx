import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../../firebase/auth";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Heading,
} from "@chakra-ui/react";

import { FormField, Loader, PrimaryButton, Link } from "../components/common";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const signInHandler = async () => {
    if (!email || !pass) return;

    setIsLoading(true);

    const { error } = await signInUser(email, pass);
    console.log(error);

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
            Sign In
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
            <PrimaryButton w={"100%"} onClick={signInHandler}>
              Login
            </PrimaryButton>
          </ButtonGroup>
        </CardBody>
      </Card>
    </Center>
  );
};

export default SignIn;
