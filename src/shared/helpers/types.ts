import { Instance } from "mobx-state-tree";
import { TodoModel } from "../store/models/todo";

export interface ITodo extends Instance<typeof TodoModel> { }