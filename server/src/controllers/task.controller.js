import { 
  createNewTask, 
  findAllTasks,
  updateOneTask, 
  removeOneTask,
} from '../services/task.service.js';


//GET
export const getAllTasks = async (req, res) => {
  const listId = req.params.id;
  try {
    const allTasks = await findAllTasks(listId);
    res.json({ message: 'Success', allTasks });
  } catch(err) {
    res
      .status(err?.status || 500)
      .send({ status: 'FAILED', data: { err: err?.message || err } });
  }
}

//POST 
export const postNewTask = async (req, res) => {
  try {
    const newTask = req.body;
    const createdTask = await createNewTask(newTask);
    res
      .status(201)
      .send({ status: 'Success', data: createdTask });
  } catch (err) {
    res
    .status(err?.status || 500)
    .send({ status: 'FAILED', data : { err: err?.message || err } });
  }
}

//PATCH
export const patchOneTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const changes = req.body;
    const updatedTask = updateOneTask(taskId, changes);
    res.json({ message: 'Success', updatedTask });
  } catch (err) {
    res
    .status(err?.status || 500)
    .send({ status: 'FAILED', data : { err: err?.message || err } });   
  }
}

//DELETE
export const deleteOneTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    removeOneTask(taskId);
    res
      .status(204)
      .send({ status: 'Success' });
  } catch (err) {
    res
    .status(err?.status || 500)
    .send({ status: 'FAILED', data : { err: err?.message || err } });    
  }
}