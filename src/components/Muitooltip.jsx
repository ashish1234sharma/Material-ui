import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const Muitooltip = () => {
  return (
    <Tooltip
      title="delete"
      placement="bottom-start"
      arrow
      enterDelay={500}
      leaveDelay={200}
      sx={{ marginLeft: "100px", marginTop: "100px" }}
    >
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};
