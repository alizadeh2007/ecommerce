import React from "react";
import { Box, Typography } from "@mui/material";
import "./admin.Module.css";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  const DashboardFn = function () {
    navigate("/Dashboard");
  };
  
  const OrderFn = function () {
    navigate("/Order");
  };
  return (
    <Box>
      <Box className="Admin">
        <Typography className="Adminfont">حساب کاربری</Typography>
      </Box>
      <Box className="Admin-main">
        <Box className="Admin-main-explain-left">
        </Box>
        <Box className="Admin-main-menu-rigth">
          <Typography
            className="Admin-main-menu-rigth-title"
            onClick={DashboardFn}
          >
            پیشخوان
          </Typography>
          <Typography className="Admin-main-menu-rigth-title" onClick={OrderFn}>
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
