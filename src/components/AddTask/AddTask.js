// src/components/AddTask/AddTask.js
import React, { useState } from 'react';
import { addTaskService } from '../../services/addTaskService';
import AddTaskDTO from '../../dtos/AddTaskDTO';

const AddTask = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;

    const taskDTO = new AddTaskDTO(taskName);
    const addedTask = await addTaskService(taskDTO);
    onAddTask(addedTask);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
