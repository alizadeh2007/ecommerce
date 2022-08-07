import "./adminLogin.Module.css";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from 'react-router-dom';
import AdminHeader from './../../../common/Header/AdminHeader/index';


function AminLogIn() {

    const navigate=useNavigate()
    const goodsCMP=function(e){
      e.stopPropagation();
        navigate("/Goods")
    }
    const orderCMP=function(){
        navigate("/OrderAdmin")
    }
  return (
    <Box>
    <AdminHeader/>
      <Box >
        <Typography className="adminLogIn-pishtkhane">
          {" "}
          .از پیشخوان حساب کاربری خود می توانید آخرین سفارش ها را ببینید
        </Typography>
      </Box>
    </Box>
  );
}

export default AminLogIn;
