import React from "react";
import "./home.style.css";
import { Box, Typography } from "@mui/material";
import BootstrapCarousel from "./../../customs/Carousel/index";
import AdbIcon from "@mui/icons-material/Adb";
import AppleIcon from "@mui/icons-material/Apple";
import LaptopWindowsIcon from "@mui/icons-material/LaptopWindows";
import IconPages from "./../../customs/IconPages/index";
import MyCard from "./../../customs/MyCard/index";
import { useDispatch } from "react-redux";
import { changeTypeFilterPage } from "../../../redux/slice/slice";
import { useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openFilterPage = function () {
    dispatch(changeTypeFilterPage(true));
    navigate("/FilterPges");
  };
  return (
    <Box>
      <BootstrapCarousel></BootstrapCarousel>
      <Box className="downoadApp">
        <Typography>Download App:</Typography>
        <Box display="flex" gap=".5rem">
          <AdbIcon className="icons"></AdbIcon>
          <AppleIcon className="icons"></AppleIcon>
          <LaptopWindowsIcon className="icons"></LaptopWindowsIcon>
        </Box>
      </Box>
      <IconPages></IconPages>
      <Box
        display="flex"
        justifyContent="space-between"
        padding="2rem"
        fontSize="1.6rem"
      >
        <Typography className="fontStyle fontStyleProduct">عینک</Typography>
        <Typography
          onClick={openFilterPage}
          className="fontStyle fontStyleSeeAll"
        >
          دیدن همه
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" gap="3.5rem" flexWrap="wrap">
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
      </Box>
    </Box>
  );
}

export default Home;
