import { useState } from "react";
import { fetchAndPostTask } from "../utils/api";
import Button from "./Button";

const AddTask = (props) => {
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    const body = {
      list: props.listId,
      title: title,
    }

    fetchAndPostTask(body).then(() => {
      props.handleUpdate();
      setTitle('');
    });
  }

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  return (
  <Button 
    buttonClassName="bg-amber-200 text-white text-xl rounded-lg px-4 py-2 
      mt-8"
    textClassName="outline-none p-2"
    handleSubmit={handleSubmit} handleChange={handleChange} value={title}
  >
    Add Task
  </Button>
  );
}

export default AddTask;