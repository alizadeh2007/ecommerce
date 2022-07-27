import React from "react";
import { Box, Typography } from "@mui/material";
import sounds from "./../../../assets/pic/sounds1.svg";
import computer from "./../../../assets/pic/computer.svg";
import sport from "./../../../assets/pic/sport.svg";
import kitchen from "./../../../assets/pic/kitchen.svg";
import car from "./../../../assets/pic/car.svg";
import bicycle from "./../../../assets/pic/bicycle.svg";
import "./iconpages.style.css";
import InputIcon from "../Input/InputIcon";
function IconPages() {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      gap="4rem"
      marginTop="2rem"
    >
      <InputIcon title="صوتی" srcIcon={sounds} />
      <InputIcon title="ورزشی" srcIcon={sport} />
      <InputIcon title="کامپیوتر" srcIcon={computer} />
      <InputIcon title="آشپزخانه" srcIcon={kitchen} />
      <InputIcon title="ماشین" srcIcon={car} />
      <InputIcon title="دوچرخه" srcIcon={bicycle} />
    </Box>
  );
}

export default IconPages;
