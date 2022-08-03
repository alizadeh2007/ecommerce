import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./payment.Module.css";
import { uptodatPaymentCMP, uptodatTotalPaymentCost } from "../../../../redux/slice/slice";
function Payment({ propspayments }) {
  const dispatch=useDispatch()
  const {openSingleProduct}=useSelector((state)=>state.openSingleProduct)
console.log("propspaymentspropspayments=",propspayments)
const minus = function () {
      dispatch(uptodatTotalPaymentCost(propspayments))
};
const plusBtn = function () {
  dispatch(uptodatPaymentCMP(propspayments))
  };
  let totalPrice = Number(propspayments.count)*Number(propspayments.price);
  return (
    <Box className="ShoppingCart-rigth-box-col ShoppingCart-rigth-box-col-payment">
      <Box className="ShoppingCart-rigth-box-col-child-sec1">
        <img
          className="ShoppingCart-rigth-box-col-child-img"
          src={propspayments.imgURL}
        />
        {propspayments.title}
      </Box>
      <Box className="ShoppingCart-rigth-box-col-child">
        {propspayments.price}

        <Typography className="tomen-font">تومان</Typography>
      </Box>
      <Box className="ShoppingCart-rigth-box-col-child">
        <Box display="flex">
          <Button
            variant="outlined"
            color="success"
            onClick={(e) => plusBtn(e.target)}
            className="ShoppingCart-rigth-box-col-child-add"
          >
            +
          </Button>
          <Box className="ShoppingCart-rigth-box-col-child-number">{propspayments.count}</Box>
          <Button
            variant="outlined"
            color="error"
            onClick={(e) => minus(e.target)}
            className="ShoppingCart-rigth-box-col-child-minus"
          >
            -
          </Button>
        </Box>
      </Box>
      <Box className="ShoppingCart-rigth-box-col-child" gap=".5rem">
        {totalPrice} <Typography fontSize="1.4rem!important">تومان</Typography>
      </Box>
    </Box>
  );
}

export default Payment;
