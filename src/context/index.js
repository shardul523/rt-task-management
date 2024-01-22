import { createContext, useContext } from "react";

export const UserContext = createContext(null);

export const TasksContext = createContext([]);

export const useAuthUser = () => useContext(UserContext);

export const useTasks = () => useContext(TasksContext);
