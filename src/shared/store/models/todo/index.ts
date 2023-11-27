import { types } from "mobx-state-tree";
import { v4 as uuidv4 } from 'uuid';

export const TodoModel = types
  .model({
    id: types.identifier,
    text: types.string,
    completed: false,
  })

  .actions(self => ({
    toggleCompleted() {
      self.completed = !self.completed
    }
  }));

export const TasksModel = types
  .model({
    tasks: types.optional(types.array(TodoModel), []),
  })

  .views(self => ({
    get getTasks() {
      return self.tasks
    },

    get getCountCompletedTasks() {
      return self.tasks.filter(todo => todo.completed).length
    },

   get getCountAllTasks() {
      return self.tasks.length
    },
  }))

  .actions(self => ({
    add(text: string) {
      self.tasks.push({
        id: uuidv4(),
        text: text,
      })
    },
    delete(id: string) {
      const index = self.tasks.findIndex(todo => todo.id === id);
      self.tasks.splice(index, 1)
    },
  }));
