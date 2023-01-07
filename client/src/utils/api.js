export const fetchAndPostList = async (body) => {
  try {
    const response = await fetch('https://mern-taskboard.onrender.com/api/v1/list', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export const fetchAndDeleteList = async (listId) => {
  try {
    const response = await fetch('https://mern-taskboard.onrender.com/api/v1/list/'
    + listId, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json'},
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

// --------- Task --------- //

export const fetchAndGetTasks = async (listId) => {
  try {
    const response = await fetch('https://mern-taskboard.onrender.com/api/v1/task/'
    + listId, {
      method: 'GET', 
      headers: { 'Content-type': 'application/json' },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export const fetchAndPostTask = async (body) => {
  try {
    const response = await fetch('https://mern-taskboard.onrender.com/api/v1/task', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export const fetchAndPatchTask = async (taskId, body) => {
  try {
    const response = await fetch('https://mern-taskboard.onrender.com/api/v1/task/' 
    + taskId, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export const fetchAndDeleteTask = async (taskId) => {
  try {
    const response = await fetch('https://mern-taskboard.onrender.com/api/v1/task/'
    + taskId, {
      method: 'DELETE',
      headers: { 'Content-type': 'applicaiton/json'},
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}