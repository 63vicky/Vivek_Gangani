/* eslint-disable no-unused-vars */
'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateTask, deleteTask } from '@/store/slices/task-slice';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { Edit, Trash2, Calendar, Clock } from 'lucide-react';

export function TaskItem({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description);
  const [editPriority, setEditPriority] = useState(
    task.priority === 'low' ||
      task.priority === 'medium' ||
      task.priority === 'high'
      ? task.priority
      : 'low'
  );

  const [editDueDate, setEditDueDate] = useState(task.dueDate || '');

  const dispatch = useDispatch();

  const handleToggleComplete = async () => {
    try {
      await dispatch(
        updateTask({
          id: task.id,
          updates: { completed: !task.completed },
        })
      ).unwrap();

      toast.success('Task Marked', {
        description: `Task marked as ${
          !task.completed ? 'completed' : 'pending'
        }`,
      });
    } catch (error) {
      toast.error('Failed to update task');
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await dispatch(deleteTask(task.id)).unwrap();
        toast.success('Deleted', {
          description: 'Task deleted successfully',
        });
      } catch (error) {
        toast.error('Error', {
          description: 'Failed to delete task',
          variant: 'destructive',
        });
      }
    }
  };

  const handleEdit = async () => {
    if (!editTitle.trim()) {
      toast.error('Task title is required', {
        variant: 'destructive',
      });
      return;
    }

    try {
      await dispatch(
        updateTask({
          id: task.id,
          updates: {
            title: editTitle.trim(),
            description: editDescription.trim(),
            priority: editPriority,
            dueDate: editDueDate || undefined,
          },
        })
      ).unwrap();

      setIsEditing(false);
      toast.success('Task updated successfully');
    } catch (error) {
      toast.error('Failed to update task');
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <Card className={`transition-all ${task.completed ? 'opacity-60' : ''}`}>
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <Checkbox
            checked={task.completed}
            onCheckedChange={handleToggleComplete}
            className="mt-1"
          />

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3
                  className={`font-medium ${
                    task.completed ? 'line-through text-muted-foreground' : ''
                  }`}
                >
                  {task.title}
                </h3>
                {task.description && (
                  <p
                    className={`text-sm mt-1 ${
                      task.completed
                        ? 'line-through text-muted-foreground'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {task.description}
                  </p>
                )}

                <div className="flex items-center space-x-2 mt-2">
                  <Badge
                    variant="outline"
                    className={getPriorityColor(task.priority)}
                  >
                    {task.priority}
                  </Badge>

                  {task.dueDate && (
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(task.dueDate)}
                    </div>
                  )}

                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {formatDate(task.createdAt)}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-1 ml-2">
                <Dialog open={isEditing} onOpenChange={setIsEditing}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Task</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="edit-title">Title</Label>
                        <Input
                          id="edit-title"
                          value={editTitle}
                          onChange={(e) => setEditTitle(e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="edit-description">Description</Label>
                        <Textarea
                          id="edit-description"
                          value={editDescription}
                          onChange={(e) => setEditDescription(e.target.value)}
                          rows={3}
                        />
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label>Priority</Label>
                          <Select
                            value={editPriority}
                            onValueChange={(value) => setEditPriority(value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="high">High</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="edit-due-date">Due Date</Label>
                          <Input
                            id="edit-due-date"
                            type="date"
                            value={editDueDate}
                            onChange={(e) => setEditDueDate(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="flex justify-end space-x-2">
                        <Button
                          variant="outline"
                          onClick={() => setIsEditing(false)}
                        >
                          Cancel
                        </Button>
                        <Button onClick={handleEdit}>Save Changes</Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button variant="ghost" size="sm" onClick={handleDelete}>
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
