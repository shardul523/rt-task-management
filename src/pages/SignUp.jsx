import { useContext, useRef } from "react";
import { signUpUser } from "../../firebase/auth";
import { UserContext } from "../context";
import Loader from "../components/common/Loader";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  calc,
} from "@chakra-ui/react";

const SignUp = () => {
  const emailInput = useRef();
  const passwordInput = useRef();
  const { user, isLoading } = useContext(UserContext);

  const signUpHandler = async (e) => {
    e.preventDefault();

    const email = emailInput.current.value;
    const password = passwordInput.current.value;

    emailInput.current.value = "";
    passwordInput.current.value = "";

    const { error } = await signUpUser(email, password);

    if (error) console.error(error);
  };

  if (isLoading) return <Loader />;

  if (user) return <div>User signed up...</div>;

  return (
    <Flex minH={"50vh"} justifyContent={"center"} align={"center"}>
      <Card minW={350}>
        <CardHeader>
          <Heading color={"blackAlpha.700"} size={"md"}>
            Sign Up
          </Heading>
        </CardHeader>
        <CardBody>
          <FormControl>
            <FormLabel color="blackAlpha.700" htmlFor="email">
              Email address
            </FormLabel>
            <Input
              type="email"
              id="email"
              focusBorderColor={"blackAlpha.500"}
            />
            <FormLabel color="blackAlpha.700" htmlFor="password">
              Password
            </FormLabel>
            <Input
              type="passord"
              id="password"
              color={"blackAlpha.800"}
              focusBorderColor={"blackAlpha.500"}
            />
          </FormControl>
        </CardBody>
        <CardFooter>
          <ButtonGroup>
            <Button colorScheme="blackAlpha">Register</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Flex>
  );

  // return (
  //   <form onSubmit={signUpHandler}>
  //     <label htmlFor="email">Email</label>
  //     <input ref={emailInput} type="email" id="email" />
  //     <label htmlFor="password">Password</label>
  //     <input ref={passwordInput} type="password" id="password" />
  //     <button type="submit">Sign Up</button>
  //   </form>
  // );
};

export default SignUp;
