import React from "react";
import "./orderGoods.Module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import AdminHeader from "./../../../../../common/Header/AdminHeader/index";
import OrderRow from "./OrderRow";
import { useEffect } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { upOrderAdmin } from "../../../../../../redux/slice/slice";

function OrderGood() {
  const navigate = useNavigate();
  const disPatch=useDispatch();
  const {OrderAdmin}=useSelector(state=>state.OrderAdmin)
useEffect(()=>{
axios.get("http://localhost:8000/orderList").then(item=>disPatch(upOrderAdmin(item.data)))
console.log(OrderAdmin)
},[])
  return (
    <Box>
      <Box display="block">
        <AdminHeader />
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box className="tayble-order">
          <Box className="order-tayble-order">نمایش</Box>
          <Box className="order-tayble-order">تاریخ سفارش</Box>
          <Box className="order-tayble-order">تعداد کالا</Box>
          <Box className="order-tayble-order">نام کاربر</Box>
          <Box className="order-tayble-order">نام خانوادگی</Box>
        </Box>
        {OrderAdmin?.map((item)=><OrderRow item={item} />)}
        
      </Box>
    </Box>
  );
}

export default OrderGood;
