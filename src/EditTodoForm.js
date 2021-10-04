import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import { TextField } from "@mui/material";
import { TodosContext } from "./contexts/todos.context";

export default function EditTodoForm({ id, task, toggleEditForm }) {
  const { dispatch } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, newTask: value });
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "100%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
        variant="standard"
      />
    </form>
  );
}
