import React from "react";
import { Box, Typography } from "@mui/material";
import "./order.Module.css";
import { useNavigate } from 'react-router-dom';
import EnhancedTable from './Table/index';
function Order() {
    const navigate = useNavigate();
    const DashboardFn = function () {
        navigate("/Dashboard");
      };
      const PersonalInfoFn=function(){
        navigate("/PersonalInfo");
    
      }
      const ExportFn=function(){
        navigate("/");
    
      }
  return (
    <Box>
      <Box className="Admin">
        <Typography className="Adminfont">سفارشات</Typography>
      </Box>
      <Box className="Admin-main">
        <Box className="Admin-main-explain-left">
        <Typography className="dashoard">

<EnhancedTable></EnhancedTable>




      </Typography>
        </Box>
        <Box className="Admin-main-menu-rigth">
          <Typography className="Admin-main-menu-rigth-title" onClick={DashboardFn}>
            پیشخوان
          </Typography>
          <Typography className="Admin-main-menu-rigth-button">
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

export default Order;
