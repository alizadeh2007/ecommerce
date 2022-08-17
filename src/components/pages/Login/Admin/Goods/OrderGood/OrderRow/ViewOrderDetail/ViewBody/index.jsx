import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./View.Module.css";
function ViewBody({item}) {
  return (
    <Box className="view">
      <Box className="title-view">
        <Typography className="title-styles"> {item.title}</Typography>
        <img className="title-view-img" src={item.imgURL} />
        <Box
          className="title-view-price-section"
          display="flex"
          width="100%"
          gap=".4rem"
        >
          <Typography className="title-view-price">قیمت محصول:</Typography>
          <Typography className="title-view-price">{item.price}</Typography>
          <Typography className="title-view-price"> تومان</Typography>
        </Box>
        <Box display="flex" className="count-orders" >
        <Typography className="title-view-price">تعداد:</Typography>
          <Typography className="title-view-price">{item.count}</Typography>
        </Box>
        <Box
          className="title-view-price-section"
          display="flex"
          width="100%"
          gap=".4rem"
        >
          <Typography className="title-view-price">قیمت کل:</Typography>
          <Typography className="title-view-price-num">{item.price*item.count}</Typography>
          <Typography className="title-view-price"> تومان</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ViewBody;
