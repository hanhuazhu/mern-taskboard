import { useState, useEffect } from 'react';
import { fetchAndGetTasks } from '../utils/api';
import AddTask from './AddTask';
import Modal from './Modal';
import Task from './Task';

const List = (props) => {
  const [tasks, setTasks] = useState([]);
  const [update, setUpdate] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [task, setTask] = useState({});
  
  const listId = props.value

  useEffect(() => {
    fetchAndGetTasks(listId).then((data) => setTasks(data.allTasks || []));
    setUpdate(false);
  }, [update]);

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      {tasks.map((task) => (
        <Task key={task._id} value={task} 
          setTask={setTask} setVisibility={setVisibility} />
      ))}
      <AddTask handleUpdate={() => setUpdate(true)} listId={listId} />
      <Modal handleUpdate={() => setUpdate(true)} setVisibility={setVisibility} 
        visibility={visibility} value={task}
      />
    </div>    
  );
}

export default List;