import { useState } from 'react';

const initialColumns = [
  {
    id: 'todo',
    title: 'To Do',
    tasks: [
      {
        id: '1',
        title: 'Design landing page',
        description: 'Create wireframes and mockups for the landing page',
        status: 'todo',
      },
      {
        id: '2',
        title: 'Set up project structure',
        description: 'Initialize the project with proper folder structure',
        status: 'todo',
      },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    tasks: [
      {
        id: '3',
        title: 'Implement authentication',
        description: 'Add user login and registration functionality',
        status: 'in-progress',
      },
    ],
  },
  {
    id: 'review',
    title: 'Review',
    tasks: [
      {
        id: '4',
        title: 'Code review',
        description: 'Review pull requests and provide feedback',
        status: 'review',
      },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    tasks: [
      {
        id: '5',
        title: 'Setup CI/CD pipeline',
        description: 'Configure automated testing and deployment',
        status: 'done',
      },
    ],
  },
];

export const useTaskBoard = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [isLoading] = useState(false);

  const handleTaskDragStart = (e, task) => {
    e.dataTransfer.setData('text/plain', task.id);
  };

  const handleTaskDragEnd = (e) => {
    // Handle drag end if needed
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = (e) => {
    // Handle drag leave if needed
  };

  const handleDrop = (e, columnId) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('text/plain');

    setColumns(prevColumns => {
      const newColumns = [...prevColumns];
      let draggedTask = null;

      // Find and remove the task from its current column
      for (const column of newColumns) {
        const taskIndex = column.tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
          draggedTask = column.tasks[taskIndex];
          column.tasks.splice(taskIndex, 1);
          break;
        }
      }

      // Add the task to the new column
      if (draggedTask) {
        const targetColumn = newColumns.find(col => col.id === columnId);
        if (targetColumn) {
          draggedTask.status = columnId;
          targetColumn.tasks.push(draggedTask);
        }
      }

      return newColumns;
    });
  };

  const handleStatusChange = (taskId, newStatus) => {
    setColumns(prevColumns => {
      const newColumns = [...prevColumns];
      let taskToMove = null;

      // Find and remove the task
      for (const column of newColumns) {
        const taskIndex = column.tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
          taskToMove = column.tasks[taskIndex];
          column.tasks.splice(taskIndex, 1);
          break;
        }
      }

      // Add to new column
      if (taskToMove) {
        const targetColumn = newColumns.find(col => col.id === newStatus);
        if (targetColumn) {
          taskToMove.status = newStatus;
          targetColumn.tasks.push(taskToMove);
        }
      }

      return newColumns;
    });
  };

  return {
    columns,
    isLoading,
    handleTaskDragStart,
    handleTaskDragEnd,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleStatusChange,
  };
};