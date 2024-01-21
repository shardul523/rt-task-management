import { addDoc, collection } from "firebase/firestore";
import { db } from "./index";

export async function addUser(user) {
  const userCollection = collection(db, "users");
  const userRef = await addDoc(userCollection, {
    email: user.email,
    uid: user.uid,
  });

  console.log(userRef);
}
