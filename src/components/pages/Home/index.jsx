import React, { useEffect, useState } from "react";
import "./home.style.css";
import { Box, Typography } from "@mui/material";
import BootstrapCarousel from "./../../customs/Carousel/index";
import AdbIcon from "@mui/icons-material/Adb";
import AppleIcon from "@mui/icons-material/Apple";
import LaptopWindowsIcon from "@mui/icons-material/LaptopWindows";
import IconPages from "./../../customs/IconPages/index";
import MyCard from "./../../customs/MyCard/index";
import { useDispatch } from "react-redux";
import bannerFooter from "./../../../assets/pic/footer-banner.jpg";
import {
  changeType,
  changeTypeFilterPage,
  storageInformationJson,
  storageInformationPantsJson,
  storageInformationShoesJson,
  upToDateChangeIcon,
  upToDateChangePersonIcn,
  uptodateNewSort,
} from "../../../redux/slice/slice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [eyesGlasses, setEyesGlasses] = useState([]);
  const [pants, setPants] = useState([]);
  const [shoes, setShoes] = useState([]);
  const { storeInfoJsonServer } = useSelector(
    (state) => state.storeInfoJsonServer
  );

  useEffect(() => {

    if(localStorage.getItem("Atoken")){
dispatch(upToDateChangePersonIcn("flex"))
dispatch(upToDateChangeIcon("none"))
    }else if(localStorage.getItem('token')){
      dispatch(changeType(false));
      dispatch(upToDateChangeIcon("none"));
      dispatch(upToDateChangePersonIcn("flex!important"));
    }else{
      dispatch(upToDateChangePersonIcn("none"))
    }
    
    axios
      .get("http://localhost:8000/eyeglasses/")
      .then((res) => dispatch(storageInformationJson(res.data)));
    axios
      .get("http://localhost:8000/pants/")
      .then((res) => dispatch(storageInformationPantsJson(res.data)));
    axios
      .get("http://localhost:8000/shoes/")
      .then((res) => dispatch(storageInformationShoesJson(res.data)));
    axios
      .get("http://localhost:8000/eyeglasses/")
      .then((res) => setEyesGlasses(res.data.slice(0, 5)));
    axios
      .get("http://localhost:8000/pants/")
      .then((res) => setPants(res.data.slice(0, 5)));
    axios
      .get("http://localhost:8000/shoes/")
      .then((res) => setShoes(res.data.slice(0, 5)));
  }, []);
  const { newSort } = useSelector((state) => state.newSort);
  const openFilterPage = function () {
    dispatch(uptodateNewSort(storeInfoJsonServer));
    dispatch(changeTypeFilterPage(true));
    navigate("/FilterPges");
  };
  const openFilterPagePants = function () {
    navigate("/Pants");
  };
  const openFilterPageShoes = function () {
    navigate("/Shoess");
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
        <Typography
          onClick={openFilterPage}
          className="fontStyle fontStyleSeeAll"
        >
          دیدن همه
        </Typography>
        <Typography className="fontStyle fontStyleProduct">عینک</Typography>
      </Box>
      <Box display="flex" justifyContent="center" gap="3.5rem" flexWrap="wrap">
      
        {eyesGlasses.map((item) => (
          <MyCard item={item} title={item.title} price={item.price} image={item.imgURL} />
        ))}
      </Box>

      <Box
        display="flex"
        marginTop="5.5rem"
        justifyContent="space-between"
        padding="2rem"
        fontSize="1.6rem"
      >
        <Typography
          onClick={openFilterPagePants}
          className="fontStyle fontStyleSeeAll"
        >
          دیدن همه
        </Typography>
        <Typography className="fontStyle fontStyleProduct">شلوار</Typography>
      </Box>
      <Box display="flex" justifyContent="center" gap="3.5rem" flexWrap="wrap">
        {pants.map((item) => (
          <MyCard item={item} title={item.title} price={item.price} image={item.imgURL} />
        ))}
      </Box>

      <Box marginTop="5rem">
        <img className="middle-Page-banner" src={bannerFooter} />
      </Box>

      <Box
        display="flex"
        marginTop="3rem"
        justifyContent="space-between"
        padding="2rem"
        fontSize="1.6rem"
      >
        <Typography
          onClick={openFilterPageShoes}
          className="fontStyle fontStyleSeeAll"
        >
          دیدن همه
        </Typography>
        <Typography className="fontStyle fontStyleProduct">کفش</Typography>
      </Box>
      <Box display="flex" justifyContent="center" gap="3.5rem" flexWrap="wrap">
        {shoes.map((item) => (
          <MyCard item={item} title={item.title} price={item.price} image={item.imgURL} />
        ))}
      </Box>
    </Box>
  );
}

export default Home;
