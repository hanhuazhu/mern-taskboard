import express from 'express';
import { 
  getAllTasks, 
  patchOneTask,
  postNewTask,
  deleteOneTask,
 } from '../../controllers/task.controller.js';


const taskRouter = express.Router();

taskRouter.get('/:id', getAllTasks);

taskRouter.post('/', postNewTask);

taskRouter.patch('/:id', patchOneTask);

taskRouter.delete('/:id', deleteOneTask);

export default taskRouter;