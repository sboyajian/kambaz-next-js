"use client";
import { useState } from "react";
import { Button, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { TodosContext, TodosContextType, useTodos, Todo } from "./todosContext";

function TodosProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ]);
  const [todo, setTodo] = useState<Todo>({ id: "-1", title: "Learn Mongo" });

  const addTodo = (todo: Todo) => {
    setTodos([...todos, { ...todo, id: new Date().getTime().toString() }]);
    setTodo({ id: "-1", title: "" });
  };
  const deleteTodo = (id: string) => setTodos(todos.filter((t) => t.id !== id));
  const updateTodo = (todo: Todo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    setTodo({ id: "-1", title: "" });
  };

  const value: TodosContextType = {
    todos,
    todo,
    setTodo,
    addTodo,
    deleteTodo,
    updateTodo,
  };
  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
}

function TodoListInner() {
  const { todos, todo, setTodo, addTodo, deleteTodo, updateTodo } = useTodos();
  return (
    <div id="wd-react-context-todo-list">
      <h2>Todo List</h2>
      <ListGroup>
        <ListGroupItem className="d-flex align-items-center gap-2">
          <FormControl
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            style={{ maxWidth: "200px" }}
          />
          <Button
            onClick={() => updateTodo(todo)}
            id="wd-update-todo-click"
            style={{
              backgroundColor: "#FFC107",
              borderColor: "#FFC107",
              color: "#000",
            }}
          >
            Update
          </Button>
          <Button
            onClick={() => addTodo(todo)}
            id="wd-add-todo-click"
            style={{ backgroundColor: "#198754", borderColor: "#198754" }}
          >
            Add
          </Button>
        </ListGroupItem>
        {todos.map((t) => (
          <ListGroupItem key={t.id} className="d-flex align-items-center gap-2">
            <span className="me-auto">{t.title}</span>
            <Button
              onClick={() => setTodo(t)}
              id="wd-set-todo-click"
              style={{ backgroundColor: "#0D6EFD", borderColor: "#0D6EFD" }}
            >
              Edit
            </Button>
            <Button
              onClick={() => deleteTodo(t.id)}
              id="wd-delete-todo-click"
              style={{ backgroundColor: "#DC3545", borderColor: "#DC3545" }}
            >
              Delete
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}

export default function ReactContextTodoList() {
  return (
    <TodosProvider>
      <TodoListInner />
    </TodosProvider>
  );
}
