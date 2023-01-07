import { useState } from 'react';
import ReactModal from 'react-modal';
import Button from './Button';
import {
  FaClipboardCheck,
} from 'react-icons/fa'
import {
  fetchAndDeleteTask,
  fetchAndPatchTask,
} from '../utils/api';

const Modal = (props) => {
  const visibility = props.visibility;
  const task = props.value;

  const setVisibility = props.setVisibility;
  const handleUpdate = props.handleUpdate;

  const { _id } = task;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleClick = () => {
    fetchAndDeleteTask(_id);
    setVisibility(false);
    handleUpdate();
  }

  const handleTitleSubmit = () => {
    fetchAndPatchTask(_id, {title: title})
      .then((data) => console.log(data));

    handleUpdate();
  }

  const handleDescriptionSubmit = () => {
    fetchAndPatchTask(_id, {description: description})
      .then((data) => console.log(data));

    handleUpdate();
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handleAfterOpen = () => {
    setTitle(task.title);
    setDescription(task.description);
  }

  return (
    <div>
      <ReactModal
        isOpen={visibility}
        onAfterOpen={() => handleAfterOpen()}
        ariaHideApp={false}
        onRequestClose={() => setVisibility(false)}
        className="absolute top-10 left-10 right-10 bottom-10 bg-white 
          p-5 rounded-lg shadow max-w-sm mx-auto outline-none"
        overlayClassName="fixed md:inset-0 bg-neutral-700/75"
      >
        <Button
          buttonClassName=""
          textClassName="bg-neutral-100 font-semibold outline-none p-2
            rounded-md"
          handleSubmit={handleTitleSubmit}
          handleChange={handleTitleChange}
          value={title}
        >
          <div className="flex text-3xl text-green-500 gap-2">
            <FaClipboardCheck className="self-center"/>
            <h5 className="font-bold">{title}</h5>
          </div>
        </Button>
        <Button
          buttonClassName="text-md text-left ml-4 mt-3"
          textClassName="bg-neutral-100 font-semibold outline-none p-2 mt-3
            rounded-md"
          handleSubmit={handleDescriptionSubmit}
          handleChange={handleDescriptionChange}
          value={description}
        >
          <p className="text-neutral-500">Edit the description...</p>
          <p className="">{description}</p>
        </Button>
        <button 
          className="bg-red-400 text-white rounded-md p-1 mt-16"
          type="button"
          onClick={handleClick}
        >
          Delete
        </button>
      </ReactModal>
    </div>
  );
}

export default Modal;