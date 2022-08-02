import React from "react";
import "./button.Module.css";
import { Box, Typography } from "@mui/material";
function Btn({title,variant}) {
  return (
    <Box className={`button ${variant}`} >
      <Typography className="button-button">{title}</Typography>
    </Box>
  );
}

export default Btn;
