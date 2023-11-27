import { v4 as uuidv4 } from 'uuid';

export const tasks = [
  {
    id: uuidv4(),
    text: 'Todo 1',
    completed: false,
  },
  {
    id: uuidv4(),
    text: 'Todo 2',
    completed: true,
  },
  {
    id: uuidv4(),
    text: 'Todo 3',
    completed: false,
  },
];