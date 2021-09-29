import React from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

export default function Todo({ task, completed }) {
  return (
    <ListItem>
      {/* to disable the ripple effect on the checkbox, 
      pass the prop 'disableRipple' */}
      <Checkbox tabIndex={-1} checked={completed} />
      <ListItemText
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        {/* aria-label -> good for screen readers  */}
        <IconButton aria-label="Delete">
          <Delete />
        </IconButton>
        <IconButton aria-label="Edit">
          <Edit />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
