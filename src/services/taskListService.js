// src/services/taskListService.js
import TaskListDTO from '../dtos/TaskListDTO';
import { mapTaskListFromDTO } from '../mappers/taskMapper';

const API_URL = 'http://localhost:5000/tasks';

export async function fetchTasksService() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return new TaskListDTO(mapTaskListFromDTO(data));
}
