import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import "./checkProduct.Module.css";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeType, upToDateChangeIcon, upToDateChangePersonIcn } from "../../../../../redux/slice/slice";
function CheckProduct() {
  const disPatch=useDispatch()
  const { PaymentCMP } = useSelector((state) => state.PaymentCMP);
  const { totalCost } = useSelector((state) => state.totalCost);
  useEffect(()=>{
    if(localStorage.getItem('token')){
      disPatch(changeType(false));
      disPatch(upToDateChangeIcon("none"));
      disPatch(upToDateChangePersonIcn("flex!important"));
    }
  },[])
  return (
    <Box className="check-Product">
      <Box className="check-Product-items">
        {PaymentCMP.map((item) => (
          <Box display="flex" className="row-Items">
            <Box
              width="30%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography className="row-font-style">تومان</Typography>
              {item.price}
            </Box>
            <Box
              width="30%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {item.title}
            </Box>
            <Box
              width="5%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography>عدد</Typography>
              {item.count}
            </Box>
            <Box
              width="30%"
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
            >
              <img width="50%" src={item.imgURL} />
            </Box>
          </Box>
        ))}
      </Box>
      <Box className="total-box">
        <Typography className="font-calculate-price">
          قیمت نهایی محصولات خریداری شده با احتساب دو درصد مالیات
        </Typography>
        <Box className="total-price">
          <Typography className="font-calculate-price-num" >تومان</Typography>
          <Typography className="font-calculate-price-num">{totalCost + (totalCost * 2) / 100}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default CheckProduct;
