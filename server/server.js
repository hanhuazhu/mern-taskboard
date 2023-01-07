import express from 'express';

import cors from 'cors';

import taskRouter from './src/v1/routes/task.route.js';
import listRouter from './src/v1/routes/list.route.js';

import db from './utils/db.js';

const app = express();
const port = 8000;

db();

app.use(express.json({ extended: false }));
app.use(cors());

app.use('/api/v1/task', taskRouter);
app.use('/api/v1/list', listRouter);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
