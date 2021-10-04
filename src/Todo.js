import React, { useContext } from "react";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";
import {
  ListItem,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { TodosContext } from "./contexts/todos.context";

export default function Todo({ id, task, completed }) {
  const { removeTodo, toggleTodo } = useContext(TodosContext);
  const [isEditing, toggle] = useToggleState();
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleEditForm={toggle} />
      ) : (
        <>
          {/* to disable the ripple effect on the checkbox, 
              pass the prop 'disableRipple' */}
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            {/* aria-label -> good for screen readers  */}
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <Delete />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
              <Edit />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
