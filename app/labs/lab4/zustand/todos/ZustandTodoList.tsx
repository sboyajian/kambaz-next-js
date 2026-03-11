"use client";
import { Button, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import useTodoStore from "./useTodoStore";

export default function ZustandTodoList() {
  const { todos, todo, setTodo, addTodo, deleteTodo, updateTodo } =
    useTodoStore();
  return (
    <div id="wd-zustand-todo-list">
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
