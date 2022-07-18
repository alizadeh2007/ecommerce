import React from "react";
import { Box, Typography } from "@mui/material";
import "./header.style.css";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
  return (
    <Box>
      <Box className="styleHeader">
        <ShoppingCartOutlinedIcon className="ShoppingCartOutlinedIcon"></ShoppingCartOutlinedIcon>
        <PersonIcon className="PersonIcon"></PersonIcon>
      </Box>
      <Box className="bgHeaderMiddle">
        <Box className="search">
          <input className="input" placeholder="جستجو" />
          <Box className="magIcon">
            <SearchOutlinedIcon className="SearchOutlinedIcon"></SearchOutlinedIcon>
          </Box>
        </Box>
        <Box className="styleLinksParent">
          <Typography className="styleLinks">درباره ما</Typography>
          <Typography className="styleLinks">ارتباط با ما</Typography>
          <Typography className="styleLinks">راهنما و مقررات</Typography>
          <Typography className="styleLinks">خانه</Typography>
        </Box>
      </Box>
      <Box className="bgHeaderFinallyParent">
      <Box className="categoryBoxStyles">
<ArrowDropDownIcon></ArrowDropDownIcon>
<Typography className="textCategoryBoxStyles">همه دسته بندی ها</Typography>
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
