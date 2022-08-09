import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import "./ShoppingCart.Module.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Payment from "./Payment/index";
import { useNavigate } from 'react-router-dom';
import { changeType, upToDateTotalCost } from "../../../redux/slice/slice";

function ShoppingCart() {
  const navigate=useNavigate()
  const disPatch=useDispatch()
  const { PaymentCMP } = useSelector((state) => state.PaymentCMP);
  const[discountState,setDiscountState]=useState("")
  const[total,setTotal]=useState()
  const[changetypes,setChangetypes]=useState("none")
  const[changetypesw,setChangetypesw]=useState("flex")
  const[totalDiscount,setTotalDiscount]=useState(total)

  const paymentBTN=function(){
    disPatch(upToDateTotalCost(total))
    const token = localStorage.getItem('token');
    if(token){
navigate("/CheckOut")
    }
    else{
      disPatch(changeType(true));
    }
  }
useEffect(()=>{
  let sum=0
  PaymentCMP.map((item)=>{
             
    sum+=item.count*item.price;
  })
  setTotal(sum)
},[PaymentCMP])
  const discount=function(){
   if(discountState==="GOLD"){
    setChangetypes("flex")
    setChangetypesw("none")
    setTotalDiscount(total-total*3/100)
   }
  }

  return (
    <Box>
      <Box className="ShoppingCart">
        <Typography className="ShoppingCartfont"> سبد خرید شما </Typography>
      </Box>
      {/* boxes */}
      <Box
        display="flex"
        marginTop="3rem"
        justifyContent="center"
        gap="2rem"
        marginBottom="2rem"
        paddingBottom="2rem"
      >
        {/* left Box */}
        <Box className="ShoppingCart-left-box" component="container">
          <Box className="ShoppingCart-left-box-header">
            <Box className="ShoppingCart-left-box-header-child">
              جمع کل خرید شما
            </Box>
          </Box>
          <Box className="ShoppingCart-left-box-col" display="flex">
            <Box className="ShoppingCart-left-box-col-rigth">
              <Box className="ShoppingCart-left-box-col-rigth-child">
                مجموع قیمت ها:
              </Box>
              <Box className="ShoppingCart-left-box-col-rigth-child">
                کارمزد:
              </Box>
              <Box className="ShoppingCart-left-box-col-rigth-child">
                کد تخفیف:
              </Box>
              <Box className="ShoppingCart-left-box-col-rigth-child ShoppingCart-left-box-col-rigth-child-PRICE">
                مبلغ قابل پرداخت:
              </Box>
            </Box>
            <Box className="ShoppingCart-left-box-col-left">
              <Box
                className="ShoppingCart-left-box-col-left-child"
                display="flex"
                gap=".5rem"
              >
                <Typography fontSize="1.4rem!important">{total}</Typography>
                <Typography fontSize="1.4rem!important">تومان</Typography>
              </Box>
              <Box className="ShoppingCart-left-box-col-left-child">2%</Box>
              <Box
                className="ShoppingCart-left-box-col-left-child"
                display="flex"
              >
                <input
                  className="ShoppingCart-left-box-col-left-child-input"
                  placeholder="کد تخفیف خود را وارد کنید"
                  onChange={(e)=>setDiscountState(e.target.value)}
                />
                <button onClick={discount} className="ShoppingCart-left-box-col-left-child-button">
                  ثبت
                </button>
              </Box>
              <Box className="ShoppingCart-left-box-col-left-child">
                <Box
                  className="ShoppingCart-left-box-col-left-child"
                  display="flex"
                  gap=".5rem"
                >
                  <Typography className=" ShoppingCart-left-box-col-rigth-child-PRICE" display={changetypesw} fontSize="1.4rem!important">{total+total*2/100}</Typography>
                  <Typography className=" ShoppingCart-left-box-col-rigth-child-PRICE" display={changetypes} fontSize="1.4rem!important">{totalDiscount}</Typography>
                  <Typography className="ShoppingCart-left-box-col-rigth-child-PRICE" fontSize="1.4rem!important">تومان</Typography>
                </Box>


              </Box>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button
              className="ShoppingCart-left-box-col-left-child-BTN"
              variant="contained"
              color="success"
              onClick={paymentBTN}
            >
              پرداخت
            </Button>
          </Box>
        </Box>
        {/* rigth Box */}
        <Box className="ShoppingCart-rigth-box">
          <Box className="ShoppingCart-rigth-box-header">
            <Box className="ShoppingCart-rigth-box-header-child">کالا</Box>
            <Box className="ShoppingCart-rigth-box-header-child">قیمت</Box>
            <Box className="ShoppingCart-rigth-box-header-child">تعداد</Box>
            <Box className="ShoppingCart-rigth-box-header-child">جمع کل</Box>
          </Box>
          {/* payment section */}
          {PaymentCMP.map((item) => (
            <Payment propspayments={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default ShoppingCart;
