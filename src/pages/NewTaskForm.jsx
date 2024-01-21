import { useRef } from "react";

import { Form } from "../components/common";
import { Center } from "@chakra-ui/react";

const NewTaskForm = () => {
  const titleInputRef = useRef();
  const dueDateInputRef = useRef();
  const descriptionInputRef = useRef();

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
        onclick: () => undefined,
      },
      {
        name: "Cancel",
        onclick: () => undefined,
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
