import { useRef } from "react";
import { signUpUser } from "../../firebase/auth";
import { useState } from "react";

const SignUp = () => {
  const emailInput = useRef();
  const passwordInput = useRef();
  const [authenticated, setAuthenticated] = useState(false);

  const signUpHandler = async () => {
    const email = emailInput.current.value;
    const password = passwordInput.current.value;

    emailInput.current.value = "";
    passwordInput.current.value = "";

    const { error, user } = await signUpUser(email, password);

    if (error) setAuthenticated(false);

    setAuthenticated(true);

    console.log(error, user);
  };

  if (authenticated) return <h1>SignUp successful</h1>;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signUpHandler();
      }}
    >
      <label htmlFor="email">Email</label>
      <input ref={emailInput} type="email" id="email" />
      <label htmlFor="password">Password</label>
      <input ref={passwordInput} type="password" id="password" />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
