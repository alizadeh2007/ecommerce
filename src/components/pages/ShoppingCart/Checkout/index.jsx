import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "./checkout.Module.css";
import City from "./City/index";
import CheckProduct from "./CheckProduct";

function CheckOut() {

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
          <Box display="flex" gap="1rem">
            <input className="checkout-inputs" placeholder="*نام" />
            <input className="checkout-inputs" placeholder="*نام خانوادگی" />
          </Box>
          <Box display="flex" gap="1rem">
            <input className="checkout-inputs" placeholder="*کد ملی" />
            <input className="checkout-inputs" placeholder="شماره شناسنامه" />
          </Box>
          <Box display="flex">
            <City />
          </Box>
          <Box width="100%" display="flex" justifyContent="center">
            <textarea
              className="address"
              placeholder="ادرس خود را وارد کنید*"
            />
          </Box>
        </Box>
          <CheckProduct />
      </Box>
      <Box display="flex" justifyContent="center" marginTop="3rem">
        <Button variant="contained" color="success" className="payment-Btn">درگاه پرداخت</Button>
      </Box>
    </Box>
  );
}

export default CheckOut;
