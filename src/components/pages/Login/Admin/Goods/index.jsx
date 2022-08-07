import "./goods.Module.css";
import Box from "@mui/material/Box";
// import React, { useEffect, useState } from "react";
// import Typography from "@mui/material/Typography";
// import { useNavigate } from "react-router";
import AdminHeader from "./../../../../common/Header/AdminHeader/index";
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';

function Goods() {
  // const navigate = useNavigate();
  return (
    <Box>
      <Box>
        <AdminHeader />
      </Box>
      <Box
        padding="3rem"
        height="30vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box width="100%">
          <Box className="Goods-tyble" >
            <Box className="Goods-tyble-row">-</Box>
            <Box className="Goods-tyble-row">دسته بندی</Box>
            <Box className="Goods-tyble-row">نام کالا</Box>
            <Box className="Goods-tyble-row">تصویر</Box>
          </Box>
          <Box className="Goods-sub-tyble">
          <Box className="Goods-tyble-rows">
            <Box>
              <DeleteIcon/>
            </Box>
            <Box>
              <BorderColorIcon/>
            </Box>
          </Box>
            <Box className="Goods-tyble-rows">دسته بندی</Box>
            <Box className="Goods-tyble-rows">نام کالا</Box>
            <Box className="Goods-tyble-rows">تصویر</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Goods;
