import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./index";

const tasksCollection = collection(db, "tasks");

export async function addUser(user) {
  const userRef = doc(db, "users", user.uid);
  try {
    await setDoc(userRef, {
      email: user.email,
      uid: user.uid,
      tasks: [],
    });
  } catch (err) {
    console.error(err);
    throw new Error("Doc not created");
  }
}

export async function addTask(newTask) {
  const userRef = doc(db, "users", newTask.createdBy);

  try {
    const taskRef = await addDoc(tasksCollection, newTask);
    await updateDoc(userRef, {
      tasks: arrayUnion(taskRef),
    });
  } catch (err) {
    console.error(err);
  }
}

export function getTasksQuery(user) {
  if (user.uid) {
    const q = query(tasksCollection, where("createdBy", "==", user.uid));
    return q;
  }
  return null;
}
