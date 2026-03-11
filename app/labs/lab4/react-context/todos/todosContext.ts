import { createContext, useContext } from "react";

export type Todo = { id: string; title: string };

export type TodosContextType = {
  todos: Todo[];
  todo: Todo;
  setTodo: (todo: Todo) => void;
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (todo: Todo) => void;
};

export const TodosContext = createContext<TodosContextType>({
  todos: [],
  todo: { id: "-1", title: "" },
  setTodo: () => {},
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
});

export const useTodos = () => useContext(TodosContext);