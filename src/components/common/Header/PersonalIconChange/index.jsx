import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useSelector } from "react-redux";
import Logout from "@mui/icons-material/Logout";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CloseModalChangeIcon from './CloseModalChangeIcon/index';
import imgIcon from './../../../../assets/pic/bag.svg';
import {upToDateCloseModalPersonIcon } from "../../../../redux/slice/slice";
import myImage from './../../../../assets/pic/myPhoto.JPG'
export default function PersonalIconChange() {
    const { closeModalPersonIcon } = useSelector(
        (state) => state.closeModalPersonIcon
      );
    const navigate = useNavigate();
    const disPatch=useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const profileBTN=function(){
    if(localStorage.getItem("token")){
      navigate("/Dashboard")
    }else if(localStorage.getItem("Atoken")){
      navigate("/AminLogIn")
    }
  }
  const closeProfileBTN=function(){
        disPatch(upToDateCloseModalPersonIcon(true))

  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
      <Box>
      <CloseModalChangeIcon/>
      </Box>
        <Tooltip title="حساب کاربری">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 26, height: 26 }}>
                <img className="myImage" src={myImage}/>
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              mr: -0.5,
              ml: 2,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 6,
              height: 6,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={profileBTN}>
          پروفایل
          <Avatar />
        </MenuItem>
        <Divider />
        <MenuItem onClick={closeProfileBTN}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          خروج از حساب
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
