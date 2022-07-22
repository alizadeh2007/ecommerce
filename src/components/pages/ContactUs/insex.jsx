import React from "react";
import { Box, Typography } from "@mui/material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./contact.style.css";

function ContactUs() {
  return (
    <Box>
      <Box className="ContactUs">
        <Typography className="ContactUsfont">ارتباط با ما </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="4rem"
      >
        <Box display="flex" alignItems="end" flexDirection="column" gap="1rem" marginTop="3.5rem!important">
          <Typography className="subContactUsfontstyle">
            :راه های ارتباط با ما
          </Typography>
          <Typography className="subContactUsfontstyle">
            021-222-2123{"  "}
            <PhoneEnabledIcon></PhoneEnabledIcon>
          </Typography>
          <Typography className="subContactUsfontstyle">
            021-222-2125{"  "}
            <PhoneEnabledIcon></PhoneEnabledIcon>
          </Typography>
          <Typography className="subContactUsfontstyle">
            admin@gmail.com{"  "}
            <MailIcon></MailIcon>
          </Typography>
        </Box>
        <Box >
          <Typography className="subContactUsfontstyle">
            :شبکه های اجتماعی ما
          </Typography>
          <Box display="flex" gap="1rem" justifyContent="center" marginTop="1rem">
            <InstagramIcon className="ContactUsicons"></InstagramIcon>
            <TelegramIcon className="ContactUsicons"></TelegramIcon>
            <LinkedInIcon className="ContactUsicons"></LinkedInIcon>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" marginTop="3rem" >
      <Typography fontSize="1.5rem!important">شعبه انقلاب: تهران-میدان انقلاب-ابتدای کارگر جنوبی-کوچه رشتچی3</Typography>

      </Box>
    </Box>
  );
}

export default ContactUs;
