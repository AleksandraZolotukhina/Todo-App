import { createContext } from "react";
import { tasks } from "../fake-data";
import { types } from "mobx-state-tree";
import { TasksModel } from "./models/todo";

export const RootStore = types.model('Root Store', {
  tasks: types.optional(TasksModel, {})
});

export const store = RootStore.create({
  tasks: { tasks }
});

export const StoreContext = createContext(store);