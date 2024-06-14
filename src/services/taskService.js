// src/services/taskService.js
import TaskDTO from '../dtos/TaskDTO';
import { mapTaskFromDTO } from '../mappers/taskMapper';

const API_URL = 'http://localhost:5000/tasks';

export async function fetchTaskById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  const taskDTO = await response.json();
  return mapTaskFromDTO(taskDTO);
}
