import { useRef } from "react";

import { Form } from "../components/common";
import { Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuthUser } from "../context";
import { addTask } from "../../firebase/db";

const NewTaskForm = () => {
  const titleInputRef = useRef();
  const dueDateInputRef = useRef();
  const descriptionInputRef = useRef();

  const navigate = useNavigate();

  const { user } = useAuthUser();

  console.log(user);

  const taskFormConfig = {
    title: "Add a New Task",
    formSize: "40%",
    fields: [
      {
        name: "Title",
        type: "text",
        id: "title",
        ref: titleInputRef,
      },
      {
        name: "Due Date",
        type: "date",
        id: "due-date",
        ref: dueDateInputRef,
      },
      {
        name: "Description",
        type: "textarea",
        id: "description",
        ref: descriptionInputRef,
      },
    ],
    buttons: [
      {
        name: "Add",
        onclick: async () => {
          const title = titleInputRef.current.value;
          const duedate = dueDateInputRef.current.value;
          const description = descriptionInputRef.current.value;
          const createdBy = user.uid;

          const task = { title, duedate, description, createdBy };
          await addTask(task);
        },
      },
      {
        name: "Cancel",
        onclick: () => navigate("/", { replace: true }),
      },
    ],
  };
  return (
    <Center>
      <Form formConfig={taskFormConfig} />
    </Center>
  );
};

export default NewTaskForm;
