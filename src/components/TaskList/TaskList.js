// src/components/TaskList/TaskList.js
import React, { useEffect, useState } from 'react';
import Task from '../Task/Task';
import { fetchTasksService } from '../../services/taskListService';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const taskListDTO = await fetchTasksService();
      setTasks(taskListDTO.tasks);
    };
    loadTasks();
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
