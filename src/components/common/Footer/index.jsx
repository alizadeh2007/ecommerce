import React from "react";
import { Box, Typography } from "@mui/material";
import "./footer.style.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import cart from "./../../../assets/pic/moneyBag.svg";
import paper from "./../../../assets/pic/paper.svg";
import twoArrow from "./../../../assets/pic/twoArrow.svg";
import money from "./../../../assets/pic/bag.svg";
import guaranty2 from "./../../../assets/pic/guaranty.svg";
function Footer() {
  return (
    <Box marginTop="3rem">
    <Box className="pikab-section">
        <Typography className="pikab-section-font" >پیکاب </Typography>
        <Box display="flex" gap="2rem">
        <Typography className="pikab-section-subfont" >۰۲۱۲۳۶۵۵۵۵۵ </Typography>
        <Typography className="pikab-section-subfont" >تهران میدان انقلاب </Typography>
        </Box>

    </Box>
      <Box
        className="iconFooter-parent"
        display="flex"
        gap="10rem"
        padding="3rem"
      >
        <Box className="footer-icon-box">
          <img className="iconFooter" src={cart} />
          <Typography className="titleIconsFooter">شارژ حساب </Typography>
        </Box>


        <Box className="footer-icon-box">
          <img className="iconFooter" src={paper} />
          <Typography className="titleIconsFooter"> یادداشت ها </Typography>
        </Box>


        <Box className="footer-icon-box">
          <img className="iconFooter" src={money} />
          <Typography className="titleIconsFooter">درآمد زایی</Typography>
        </Box>

        
        <Box className="footer-icon-box">
          <img className="iconFooter" src={guaranty2} />
          <Typography className="titleIconsFooter"> ضمانت خرید</Typography>
        </Box>
      </Box>
      <Box className="footer">
        <Box className="fontStylesParent">
          <Typography className="fontStylesTitle" fontWeight="bold">
            پیکاب در شبکه های اجتماعی
          </Typography>
          <Box display="flex" gap="1rem">
            <InstagramIcon className="icons"></InstagramIcon>
            <TelegramIcon className="icons"></TelegramIcon>
            <LinkedInIcon className="icons"></LinkedInIcon>
          </Box>
          <Box display="flex">
            <Box className="footerstyleforinputregistration">ثبت</Box>
            <input className="footerstyleforinput" placeholder="ایمیل" />
          </Box>
        </Box>
        <Box className="fontStylesParent">
          <Typography className="fontStylesTitle" fontWeight="bold">
            {" "}
            راهنمای خرید از پیکاب
          </Typography>
          <Typography className="fontStyles"> نحوه ثبت سفارش</Typography>
          <Typography className="fontStyles"> رویه ثبت سفارش</Typography>
          <Typography className="fontStyles"> شیوه پرداخت</Typography>
        </Box>
        <Box className="fontStylesParent">
          <Typography className="fontStylesTitle" fontWeight="bold">
            با پیکاب
          </Typography>
          <Typography className="fontStyles">اخبار پیکات</Typography>
          <Typography className="fontStyles">فروش در پیکاب</Typography>
          <Typography className="fontStyles">فرصت ها در پیکاب </Typography>
          <Typography className="fontStyles">درباره پیکاب </Typography>
        </Box>
        <Box className="fontStylesParent">
          <Typography className="fontStylesTitle" fontWeight="bold">
            خدمات مشتریان
          </Typography>
          <Typography className="fontStyles"> پرسش و پاسخ</Typography>
          <Typography className="fontStyles">شرایط استفاده شما</Typography>
          <Typography className="fontStyles">گزارش باگ </Typography>
          <Typography className="fontStyles">پیکاب شما</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
