import React from "react";
import { Box, Typography } from "@mui/material";
import "./admin.Module.css";

function Admin() {
  return (
    <Box>
      <Box className="Admin">
        <Typography className="Adminfont">حساب کاربری</Typography>
      </Box>
      <Box className="Admin-main">
        <Box className="Admin-main-explain-left"></Box>
        <Box className="Admin-main-menu-rigth">
          <Typography className="Admin-main-menu-rigth-title">
            پیشخوان
          </Typography>
          <Typography className="Admin-main-menu-rigth-title">
            سفارشات
          </Typography>{" "}
          <Typography className="Admin-main-menu-rigth-title">
            اطلاعت حساب کاربری
          </Typography>{" "}
          <Typography className="Admin-main-menu-rigth-title">
            خروج از سیستم{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Admin;
