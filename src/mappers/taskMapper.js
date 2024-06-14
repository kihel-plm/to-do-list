// src/mappers/taskMapper.js
import Task from '../models/Task';
import TaskDTO from '../dtos/TaskDTO';

export function mapTaskFromDTO(taskDTO) {
  return new Task(taskDTO.id, taskDTO.name);
}

export function mapTaskListFromDTO(taskListDTO) {
  return taskListDTO.tasks.map(taskDTO => mapTaskFromDTO(taskDTO));
}
