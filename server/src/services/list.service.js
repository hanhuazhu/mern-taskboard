import List from '../models/list.model.js';
import Task from '../models/task.model.js';

export const findAllLists = async () => {
  try {
    const allLists = await List.find();
    return allLists;
  } catch (err) {
    throw err;
  }
}

export const findOneList = async (listId) => {
  try {
    const oneList = await List.findById(listId);
    return oneList;
  } catch (err) {
    throw err;
  }
}

export const createNewList = async (newList) => {
  try {
    const createdList = await List.create(newList);
    return createdList;
  } catch (err) {
    throw err;
  }
}

export const updateOneList = async (listId, changes) => {
  try {
    const updatedTask = await List.findByIdAndUpdate(listId, changes);
    return updatedTask;
  } catch (err) {
    throw err;
  }
}

export const removeOneList = async (listId) => {
  try {
    await List.findByIdAndDelete(listId);
    await Task.deleteMany({ list: listId });
  } catch (err) {
    throw err;
  }
}

