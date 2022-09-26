import React from 'react';
import Task from './Task';

const TasksList = ({ tasks, updateTask, deleteTask }) => {
    return (
        <ul className="list">
          {tasks.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={updateTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
    );
  };

export default (TasksList);
