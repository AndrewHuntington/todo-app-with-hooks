import React from "react";
import { Paper, List, Divider } from "@mui/material";
import Todo from "./Todo";

export default function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <React.Fragment key={todo.id}>
            <Todo
              id={todo.id}
              task={todo.task}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}
