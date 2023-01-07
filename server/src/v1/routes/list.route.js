import express from 'express';
import { 
  deleteOneList,
  getAllLists, 
  getOneList, 
  patchOneList, 
  postNewList,
} from '../../controllers/list.controller.js';

const listRouter = express.Router();

listRouter.get('/', getAllLists);

listRouter.get('/:id', getOneList);

listRouter.post('/', postNewList);

listRouter.patch('/:id', patchOneList);

listRouter.delete('/:id', deleteOneList);

export default listRouter;