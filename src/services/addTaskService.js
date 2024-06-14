// src/services/addTaskService.js
import AddTaskDTO from '../dtos/AddTaskDTO';


const API_URL = 'http://localhost:5000/tasks';

export async function addTaskService(taskDTO) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskDTO),
  });
  const data = await response.json();
  return new AddTaskDTO(data.id, data.name);
}
