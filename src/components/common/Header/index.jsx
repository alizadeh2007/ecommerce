import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import "./header.style.css";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import changeTypes, { changeType, uptodateSearchEyesGlass } from "./../../../redux/slice/slice.js";
import Categories from './ComboBox/index';
import DirectionSensitive from "../../../assets/Rtl";
function Header() {
  const disPatch = useDispatch();
  console.log(changeTypes);
  const registerIcon = function () {
    disPatch(changeType(true));
  };
  const navigate = useNavigate();
  const goAboutUs = function () {
    navigate("/about");
  };
  const goHome = function () {
    navigate("/");
  };
  const goContactUs = function () {
    navigate("/ContactUs");
  };
  const goGuidLine = function () {
    navigate("/GuidLine");
  };
  const openModalShoppingList=function(){
    navigate("/EmptyBasket")
  }
  const [userInput, setUserInput] = useState([])

  const handleChange=function(e){
    setUserInput(e.target.value)
    disPatch(uptodateSearchEyesGlass(userInput));
  }
  
  return (
    <Box>
      <Box className="styleHeader">
        <ShoppingCartOutlinedIcon onClick={openModalShoppingList} className="ShoppingCartOutlinedIcon"></ShoppingCartOutlinedIcon>
        <PersonIcon onClick={registerIcon} className="PersonIcon"></PersonIcon>
      </Box>
      <Box className="bgHeaderMiddle">
        <Box className="search">
          <input className="input" onChange={handleChange}  value={userInput}  placeholder="جستجو" />
          <Box className="magIcon">
            <SearchOutlinedIcon className="SearchOutlinedIcon"></SearchOutlinedIcon>
          </Box>
        </Box>
        <Box className="styleLinksParent">
          <Typography onClick={goAboutUs} className="styleLinks">
            درباره ما
          </Typography>
          <Typography onClick={goContactUs} className="styleLinks">
            ارتباط با ما
          </Typography>
          <Typography onClick={goGuidLine} className="styleLinks">
            راهنما و مقررات
          </Typography>
          <Typography onClick={goHome} className="styleLinks">
            خانه
          </Typography>
        </Box>
      </Box>
      <Box className="bgHeaderFinallyParent">
        <Box >
        <DirectionSensitive>
          <Categories className="categoryBoxStyles"></Categories>
        </DirectionSensitive>
        </Box>
        <Typography className="bgHeaderFinally">پوشاک</Typography>
        <Typography className="bgHeaderFinally">آشپزخانه</Typography>
        <Typography className="bgHeaderFinally">ورزشی</Typography>
        <Typography className="bgHeaderFinally">آرایشی و بهداشتی</Typography>
        <Typography className="bgHeaderFinally">عینک</Typography>
        <Typography className="TitleFinally">:دسترسی سریع به</Typography>
      </Box>
    </Box>
  );
}

export default Header;
