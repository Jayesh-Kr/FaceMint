import React from 'react';
import TaskColumn from './TaskColumn.jsx';
import { Skeleton } from '@/components/ui/skeleton.jsx';
import { useTaskBoard } from '@/hooks/useTaskBoard.js';

const TaskBoard = ({ className }) => {
  const {
    columns,
    isLoading,
    handleTaskDragStart,
    handleTaskDragEnd,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleStatusChange,
  } = useTaskBoard();

  if (isLoading) {
    return (
        <div className={`flex gap-4 overflow-x-auto pb-4 ${className}`}>
            {[...Array(4)].map((_, i) => (
                <div key={i} className="flex flex-col w-72 min-w-72 rounded-lg border border-border bg-card/50 p-3 space-y-4">
                    <Skeleton className="h-6 w-2/3" />
                    <div className="space-y-2">
                        <Skeleton className="h-44 w-full" />
                        <Skeleton className="h-44 w-full" />
                    </div>
                </div>
            ))}
        </div>
    );
  }

  return (
    <div className={`flex gap-4 overflow-x-auto pb-4 ${className}`}>
      {columns.map(column => (
        <TaskColumn
          key={column.id}
          column={column}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onTaskDragStart={handleTaskDragStart}
          onTaskDragEnd={handleTaskDragEnd}
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
};

export default TaskBoard;