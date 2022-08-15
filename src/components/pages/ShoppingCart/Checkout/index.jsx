import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import "./checkout.Module.css";
import City from "./City/index";
import CheckProduct from "./CheckProduct";
import { changeType, upToDateChangeIcon, upToDateChangePersonIcn } from "../../../../redux/slice/slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";

function CheckOut() {
  const [name,setName]=useState();
  const [family,setFamily]=useState();
  const [idCard,setIdCard]=useState();
  const [cardnum,setCardNum]=useState();
  const [location,setLocation]=useState();
  const {PaymentCMP}=useSelector((state)=>state.PaymentCMP)
  const disPatch=useDispatch()
  useEffect(()=>{
    if(localStorage.getItem('token')){
      disPatch(changeType(false));
      disPatch(upToDateChangeIcon("none"));
      disPatch(upToDateChangePersonIcn("flex!important"));
    }
  },[])
  const payCMD=()=>{
    alert("hg")
    axios.post(`http://localhost:8000/orderList/`,{
      "id":new Date(),
      "card":PaymentCMP,
      "userInfo":[{
        "name":name,
        "family":family,
        "idCard":idCard,
        "cardnum":cardnum,
        "location":location
      }]
    })
  }

  return (
    <Box padding="2rem">
      <Box display="flex" justifyContent="flex-end">
        <Typography className="checkout-Title">
          لطفا اطلاعات خود را دقیق وارد نمائید
        </Typography>
      </Box>
      <Box display="flex" width="100%" justifyContent="center" gap="2rem">
        <Box className="checkout-box">
      <Typography className="form-address-title">  فروم اطلاعات و آدرس </Typography>
          <Box display="flex" gap="1rem" width="80%">
            <input onChange={(e)=>setFamily(e.target.value)} className="checkout-inputs-family" placeholder="نام خانوادگی*" />
            <input onChange={(e)=>setName(e.target.value)} className="checkout-inputs-name" placeholder="نام*" />
          </Box>
          <Box display="flex" gap="1rem" width="80%!important">
            <input onChange={(e)=>setIdCard(e.target.value)} className="checkout-inputs-code-num" placeholder="*کد ملی" />

            <input onChange={(e)=>setCardNum(e.target.value)} className="checkout-inputs-code-num" placeholder="شماره شناسنامه" />
          </Box>
          <Box display="flex">
            <City />
          </Box>
          <Box width="100%" display="flex" justifyContent="center">
            <textarea
            onChange={(e)=>setLocation(e.target.value)}
              className="address"
              placeholder="ادرس خود را وارد کنید*"
            />
          </Box>
        </Box>
          <CheckProduct />
      </Box>
      <Box display="flex" justifyContent="center" marginTop="3rem">
        <Button onClick={payCMD} variant="contained" color="success" className="payment-Btn">درگاه پرداخت</Button>
      </Box>
    </Box>
  );
}

export default CheckOut;
