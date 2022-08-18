import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Box, Typography } from "@mui/material";
import "./header.style.css";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import changeTypes, {
  changeType,
  uptodateSearchEyesGlass,
} from "./../../../redux/slice/slice.js";
import Categories from "./ComboBox/index";
import DirectionSensitive from "../../../assets/Rtl";
import PersonalIconChange from "./PersonalIconChange/index";
import DensityMediumRoundedIcon from "@mui/icons-material/DensityMediumRounded";
import PrimarySearchAppBar from "./MenuBarMobile/index";




const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));




function Header() {
  const { PaymentCMP } = useSelector((state) => state.PaymentCMP);
  const { changeIcon } = useSelector((state) => state.changeIcon);
  const { changePersonIcn } = useSelector((state) => state.changePersonIcn);

  //changePersonIcn
  const [changePersonIcon, setChangePersonIcon] = useState("none!important");
  const [persinIconRegister, setPersinIconRegister] = useState("flex");
  const disPatch = useDispatch();
  // register icon
  const registerIcon = function () {
    if (!localStorage.getItem("token") && !localStorage.getItem("Amintoken")) {
      
      disPatch(changeType(true));
    }
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
  const openModalShoppingList = function () {
    if (PaymentCMP.length == 0) {
      navigate("/EmptyBasket");
    } else {
      navigate("/ShoppingCart");
    }
  };
  const [userInput, setUserInput] = useState([]);

  const handleChange = function (e) {
    setUserInput(e.target.value);
    disPatch(uptodateSearchEyesGlass(userInput));
  };

  return (
    <Box>
      <Box>
        <Box className="styleHeader">
          <Box display="flex" gap="1rem" alignItems="center">
            <Box className="countProParent">
              <ShoppingCartOutlinedIcon
                onClick={openModalShoppingList}
                className="ShoppingCartOutlinedIcon countProIcon"
              />
              {PaymentCMP.length == 0 ? (
                ""
              ) : (
                <Typography className="countPro">
                  {PaymentCMP.length}
                </Typography>
              )}
            </Box>
            <Box display={changeIcon}>
              <PersonIcon onClick={registerIcon} className="PersonIcon" />
            </Box>

            <Box display={changePersonIcn}>





              <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        {/* <Avatar  /> */}
              <PersonalIconChange alt="Remy Sharp" src="./../../../assets/pic/b5e501216f7d50205a01b89c3d12370a3c20c114_1658557717.jpg" />
      </StyledBadge>






            </Box>
          </Box>
          <DensityMediumRoundedIcon className="styleHeader-Parent" />
          
        </Box>
      </Box>
      <Box className="bgHeaderMiddle">
        <Box className="search">
          <input
            className="input"
            onChange={handleChange}
            value={userInput}
            placeholder="جستجو"
          />
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
        <Box>
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
