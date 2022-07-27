import React from "react";
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

function InputIcon({ title, srcIcon }) {
  return (
    <Box className="iconsCircle">
      <img className="icon" src={srcIcon} />
      <Typography>{title}</Typography>
    </Box>
  );
}

export default InputIcon;
