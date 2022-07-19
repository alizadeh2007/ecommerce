import { Box } from "@mui/material";
import React from "react";
import Home from "../components/pages/Home";
import Header from "./../components/common/Header/index";
import "./../assets/css/css.style.css";
import Footer from './../components/common/Footer/index';
import Login from './../components/pages/Login/index';
import AboutUs from './../components/pages/AboutUs/index';
import ContactUs from './../components/pages/ContactUs/insex';
import GuidLine from './../components/pages/GuidLine/index';
function App() {
  return (
    <Box>
    <Login></Login>
      <Header></Header>
      {/* <Home></Home>
      <Footer></Footer> */}
      <AboutUs></AboutUs>
      {/* <ContactUs></ContactUs> */}
      {/* <GuidLine></GuidLine> */}
    </Box>
  );
}

export default App;
