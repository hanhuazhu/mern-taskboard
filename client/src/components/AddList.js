import { useState } from "react";
import { fetchAndPostList } from "../utils/api";
import Button from "./Button";

const AddList = (props) => {
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    const body = {
      title: title,
    }

    fetchAndPostList(body).then(() => {
      props.handleUpdate();
      setTitle('');
    });
  }

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  return (
  <Button 
    buttonClassName="bg-amber-200 text-white text-xl
      rounded-lg px-4 py-2 mt-2"
    textClassName="bg-neutral-100 font-semibold outline-none p-2
      rounded-md"
    handleSubmit={handleSubmit} handleChange={handleChange} value={title}
  >
    Add List
  </Button>
  );
}

export default AddList;