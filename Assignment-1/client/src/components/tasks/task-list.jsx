import { useSelector } from 'react-redux';
import { TaskItem } from './task-item';

export function TaskList() {
  const { tasks, filter } = useSelector((state) => state.tasks);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  if (filteredTasks.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        {filter === 'all'
          ? 'No tasks yet. Create your first task above!'
          : `No ${filter} tasks found.`}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {filteredTasks.map((task) => {
        return <TaskItem key={task.id} task={task} />;
      })}
    </div>
  );
}
