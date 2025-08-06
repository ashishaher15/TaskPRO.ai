import express from 'express';
import { createTask } from '../controler/Task.controller.js';
import { showTask } from '../controler/Task.controller.js';
import { updateTask } from '../controler/Task.controller.js';
import { deleteTask } from '../controler/Task.controller.js';
import { getAllTask } from '../controler/Task.controller.js';

const Taskrouter = express.Router();

Taskrouter.post('/create-task', createTask)
Taskrouter.get('/get-all-task', getAllTask)
Taskrouter.get('/show-task/:taskid', showTask)
Taskrouter.put('/update-task/:taskid', updateTask)
Taskrouter.delete('/delete-task/:taskid', deleteTask)

export default Taskrouter;