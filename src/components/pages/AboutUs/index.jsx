import React from "react";
import { Box, Typography } from "@mui/material";
import "./about.style.css";

function AboutUs() {
  return (
    <Box>
      <Box className="aboutus">
        <Typography className="aboutusfont">درباره ما</Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box className="aboutusSendEmain">
          <Typography >کادر ارسال پیام شما، کاربر عزیز</Typography>
          <input className="aboutusinputstyle" placeholder="نام خود را وارد کنید"/>
          <input className="aboutusinputstyle" placeholder="ایمیل خود را وارد کنید"/>
          <input className="aboutusinputstyle yourLetterBox" placeholder="متن خود را بنویسید..."/>
        </Box>
        <Box display="flex" flexDirection="column" gap="1rem" >
          <Typography className="subaboutusfontstyle">:راه های ارتباط با ما</Typography>
          <Typography className="subaboutusfontstyle">021-222-2123</Typography>
          <Typography className="subaboutusfontstyle">021-222-2125</Typography>
          <Typography className="subaboutusfontstyle">admin@gmail.com</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutUs;
