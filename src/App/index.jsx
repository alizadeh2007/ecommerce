import { Box } from "@mui/material";
import React from "react";
import Home from "../components/pages/Home";
import Header from "./../components/common/Header/index";
import "./../assets/css/css.style.css";
import Footer from "./../components/common/Footer/index";
import Login from "./../components/pages/Login/index";
import AboutUs from "./../components/pages/AboutUs/index";
import ContactUs from "./../components/pages/ContactUs/insex";
import GuidLine from "./../components/pages/GuidLine/index";
import { Routes, Route } from "react-router-dom";
import Conditions from "../components/pages/Login/TermsAndConditions/index";
import EmptyBasket from "./../components/pages/EmptyBasket/index";
import SingleProduct from "./../components/pages/SingleProduct/index";
import FilterPges from "./../components/pages/FilterPges/index";
import Admin from "./../components/pages/Admin/index";
import RegisterModal from "./../components/pages/Login/Register/index";
import Dashboard from "./../components/pages/Admin/Dashboard/index";
import Order from './../components/pages/Admin/Order/index';
import PersonalInfo from './../components/pages/Admin/PersonalInfo/index';
import Pants from './../components/pages/Products/Pants/index';
import Shoes from './../components/pages/Products/Shoes/index';
import ShoppingCart from "../components/pages/ShoppingCart";
function App() {
  return (
    <Box>
      <Header></Header>
      <Conditions></Conditions>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="GuidLine" element={<GuidLine />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="EmptyBasket" element={<EmptyBasket />} />
        <Route path="SingleProduct" element={<SingleProduct />} />
        <Route path="FilterPges" element={<FilterPges />} />
        <Route path="Admin" element={<Admin />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Order" element={<Order />} />
        <Route path="PersonalInfo" element={<PersonalInfo />} />
        <Route path="Pants" element={<Pants />} />
        <Route path="Shoess" element={<Shoes />} />
        <Route path="ShoppingCart" element={<ShoppingCart />} />

      </Routes>
      <RegisterModal></RegisterModal>
      <Login></Login>
      <Footer></Footer>
    </Box>
  );
}

export default App;
