import React from 'react';
import { Card, CardContent } from '@/components/ui/card.jsx';

const TaskColumn = ({
  column,
  onDrop,
  onDragOver,
  onDragLeave,
  onTaskDragStart,
  onTaskDragEnd,
  onStatusChange,
}) => {
  const handleDrop = (e) => {
    onDrop(e, column.id);
  };

  return (
    <div
      className="flex flex-col w-72 min-w-72 rounded-lg border border-border bg-card/50 p-3"
      onDrop={handleDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      <h3 className="font-semibold text-sm mb-3 text-foreground">
        {column.title}
      </h3>
      <div className="space-y-2 flex-1">
        {column.tasks.map((task) => (
          <Card
            key={task.id}
            className="p-3 cursor-move hover:shadow-md transition-shadow"
            draggable
            onDragStart={(e) => onTaskDragStart(e, task)}
            onDragEnd={onTaskDragEnd}
          >
            <CardContent className="p-0">
              <h4 className="font-medium text-sm mb-1">{task.title}</h4>
              {task.description && (
                <p className="text-xs text-muted-foreground">{task.description}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;