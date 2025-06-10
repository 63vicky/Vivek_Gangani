import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '@/store/slices/task-slice';
import { Button } from '@/components/ui/button';

export function TaskFilters() {
  const dispatch = useDispatch();
  const { filter, tasks } = useSelector((state) => state.tasks);

  const filters = [
    { key: 'all', label: 'All', count: tasks.length },
    {
      key: 'pending',
      label: 'Pending',
      count: tasks.filter((t) => !t.completed).length,
    },
    {
      key: 'completed',
      label: 'Completed',
      count: tasks.filter((t) => t.completed).length,
    },
  ];

  return (
    <div className="flex space-x-1">
      {filters.map((filterOption) => (
        <Button
          key={filterOption.key}
          variant={filter === filterOption.key ? 'default' : 'outline'}
          size="sm"
          onClick={() => dispatch(setFilter(filterOption.key))}
        >
          {filterOption.label} ({filterOption.count})
        </Button>
      ))}
    </div>
  );
}
