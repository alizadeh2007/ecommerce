import React from "react";
import { Box, Typography } from "@mui/material";
import "./dashboard.Module.css";
import { useNavigate } from "react-router-dom";
import { upToDateCloseModalPersonIcon } from "../../../../redux/slice/slice";
import { useDispatch } from 'react-redux';

function Admin() {
  const disPatch= useDispatch()
  const navigate = useNavigate();

  const DashboardFn = function () {
    navigate("/Dashboard");
  };
  const OrderFn = function () {
    navigate("/Order");
  };
  const PersonalInfoFn=function(){
    navigate("/PersonalInfo");

  }
  const ExportFn=function(){
    disPatch(upToDateCloseModalPersonIcon(true))
    // navigate("/");

  }
  return (
    <Box>
      <Box className="Admin">
        <Typography className="Adminfont">پیشخوان</Typography>
      </Box>
      <Box className="Admin-main">
        <Box className="Admin-main-explain-left">
        <Typography className="dashoard">
        از پیشخوان حساب کاربری خود می توانید آخرین سفارش ها را ببینید.
      </Typography>
        </Box>
        <Box className="Admin-main-menu-rigth">
          <Typography
            className="Admin-main-menu-rigth-button"
            onClick={DashboardFn}
          >
            پیشخوان
          </Typography>
          <Typography className="Admin-main-menu-rigth-title" onClick={OrderFn}>
            سفارشات
          </Typography>{" "}
          <Typography className="Admin-main-menu-rigth-title" onClick={PersonalInfoFn}>
            اطلاعت حساب کاربری
          </Typography>{" "}
          <Typography className="Admin-main-menu-rigth-title" onClick={ExportFn}>
            خروج از سیستم{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Admin;
