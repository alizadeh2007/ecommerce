import React from "react";
import { Box, Typography } from "@mui/material";
import sounds from "./../../../assets/pic/sounds1.svg";
import computer from "./../../../assets/pic/computer.svg";
import sport from "./../../../assets/pic/sport.svg";
import kitchen from "./../../../assets/pic/kitchen.svg";
import car from "./../../../assets/pic/car.svg";
import bicycle from "./../../../assets/pic/bicycle.svg";
import "./iconpages.style.css";
function IconPages() {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      gap="4rem"
      marginTop="2rem"
    >
      <Box className="iconsCircle">
      <img className="icon" src={sounds}/>
      <Typography>صوتی</Typography>
      </Box>
      <Box className="iconsCircle">
      <img className="icon" src={sport}/>
      <Typography>ورزشی</Typography>

      </Box>
      <Box className="iconsCircle">
      <img className="icon" src={computer}/>
      <Typography>کامپیوتر</Typography>

      </Box>
      <Box className="iconsCircle">
      <img className="icon" src={kitchen}/>
      <Typography>آشپزخانه</Typography>

      </Box>
      <Box className="iconsCircle">
      <img className="icon" src={car}/>
      <Typography> ماشین</Typography>

      </Box>
      <Box className="iconsCircle">
      <img className="icon" src={bicycle}/>
      <Typography>دوچرخه</Typography>

      </Box>

    </Box>
  );
}

export default IconPages;
