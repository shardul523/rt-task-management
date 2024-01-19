import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./index";

export async function signUpUser(email, password) {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return { error: null, user };
  } catch (error) {
    return { error, user: null };
  }
}

export async function signInUser(email, password) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return { error: null, user };
  } catch (error) {
    return { error, user: null };
  }
}
