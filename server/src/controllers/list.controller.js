import { 
  createNewList, 
  findAllLists,
  updateOneList, 
  removeOneList,
  findOneList,
} from '../services/list.service.js';


//GET
export const getAllLists = async (req, res) => {
  try {
    const allLists = await findAllLists();
    const count = await 
    res.json({
       message: 'Success', allLists });
  } catch(err) {
    res
      .status(err?.status || 500)
      .send({ status: 'FAILED', data: { err: err?.message || err } });
  }
}

export const getOneList = async (req, res) => {
  try {
    const listId = req.params.id;
    const oneList = await findOneList(listId);
    res.json({ message: 'Success', oneList });
  } catch(err) {
    res
      .status(err?.status || 500)
      .send({ status: 'FAILED', data: { err: err?.message || err } });
  }  
}

//POST 
export const postNewList = async (req, res) => {
  try {
    const newList = req.body;
    const createdList = await createNewList(newList);
    res
      .status(201)
      .send({ status: 'Success', data: createdList });
  } catch (err) {
    res
    .status(err?.status || 500)
    .send({ status: 'FAILED', data : { err: err?.message || err } });
  }
}

//PATCH
export const patchOneList = async (req, res) => {
  try {
    const listId = req.params.id;
    const changes = req.body;
    const updatedList = updateOneList(listId, changes);
    res.json({ message: 'Success', updatedList });
  } catch (err) {
    res
    .status(err?.status || 500)
    .send({ status: 'FAILED', data : { err: err?.message || err } });   
  }
}

//DELETE
export const deleteOneList = async (req, res) => {
  try {
    const listId = req.params.id;
    removeOneList(listId);
    res
      .status(204)
      .send({ status: 'Success' });
  } catch (err) {
    res
    .status(err?.status || 500)
    .send({ status: 'FAILED', data : { err: err?.message || err } });    
  }
}