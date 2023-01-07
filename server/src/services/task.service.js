import Task from '../models/task.model.js';

export const findAllTasks = async (listId) => {
  try {
    const allTasks = await Task
      .find({ list: listId })
      .exec();
    return allTasks;
  } catch (err) {
    throw err;
  }
}

export const createNewTask = async (newTask) => {
  try {
    const createdTask = await Task.create(newTask);
    return createdTask;
  } catch (err) {
    throw err;
  }
}

export const updateOneTask = async (taskId, changes) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(taskId, changes);
    return updatedTask;
  } catch (err) {
    throw err;
  }
}

export const removeOneTask = async (taskId) => {
  try {
    await Task.findByIdAndDelete(taskId);
  } catch (err) {
    throw err;
  }
}

