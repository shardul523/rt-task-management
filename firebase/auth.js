import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "./index";
import { setLocalUser } from "../src/utility";
import { addUser } from "./db";

export async function signUpUser(email, password) {
  try {
    const userToken = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    addUser(userToken.user);
    setLocalUser(userToken);
    return { error: null, user: userToken.user };
  } catch (error) {
    return { error, user: null };
  }
}

export async function signInUser(email, password) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    setLocalUser(user);
    return { error: null, user };
  } catch (error) {
    return { error, user: null };
  }
}

export async function signOutUser() {
  await signOut(auth);
}
