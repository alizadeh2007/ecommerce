import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import "./ShoppingCart.Module.css";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Payment from "./Payment/index";

function ShoppingCart() {
  const { PaymentCMP } = useSelector((state) => state.PaymentCMP);


  console.log("PaymentCMP=", PaymentCMP);
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
              <Box className="ShoppingCart-left-box-col-rigth-child">
                مبلغ قابل پرداخت:
              </Box>
            </Box>
            <Box className="ShoppingCart-left-box-col-left">
              <Box
                className="ShoppingCart-left-box-col-left-child"
                display="flex"
                gap=".5rem"
              >
                <Typography fontSize="1.4rem!important">270000</Typography>
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
                />
                <button className="ShoppingCart-left-box-col-left-child-button">
                  ثبت
                </button>
              </Box>
              <Box className="ShoppingCart-left-box-col-left-child">
                <Box
                  className="ShoppingCart-left-box-col-left-child"
                  display="flex"
                  gap=".5rem"
                >
                  <Typography fontSize="1.4rem!important">270000</Typography>
                  <Typography fontSize="1.4rem!important">تومان</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button
              className="ShoppingCart-left-box-col-left-child-BTN"
              variant="contained"
              color="success"
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
          {/* <Payment />  */}
          {PaymentCMP.map((item) => (
           <Payment propspayments={item} /> 
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default ShoppingCart;
