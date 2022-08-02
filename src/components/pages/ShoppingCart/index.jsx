import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import "./ShoppingCart.Module.css";
import { store } from "./../../../redux/store/index";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";

function ShoppingCart() {
  const { openSingleProduct } = useSelector((state) => state.openSingleProduct);
  const [price, setPrice] = useState(1);
  return (
    <Box>
      <Box className="ShoppingCart">
        <Typography className="ShoppingCartfont"> سبد خرید شما </Typography>
      </Box>
      {/* boxes */}
      <Box display="flex" marginTop="3rem" justifyContent="center" gap="2rem">
        {/* left Box */}
        <Box className="ShoppingCart-left-box">
          <Box className="ShoppingCart-left-box-header">
            <Box className="ShoppingCart-left-box-header-child">
              جمع کل خرید شما
            </Box>
          </Box>
          <Box className="ShoppingCart-left-box-col">
            <Box className="ShoppingCart-left-box-col-child">
              <Typography>مجموع قیمت ها:</Typography>
              <Box display="flex">
                <Typography className="tomen-font">270000</Typography>
                <Typography className="tomen-font">تومان</Typography>
              </Box>
            </Box>
            <Box className="ShoppingCart-left-box-col-child">
            <Typography>کارمزد:</Typography>
              <Box display="flex">
                <Typography className="tomen-font">1%</Typography>
              </Box>
            </Box>
            <Box className="ShoppingCart-left-box-col-child">dsf</Box>
            <Box className="ShoppingCart-left-box-col-child">sdfsdf</Box>
            <Box className="ShoppingCart-left-box-col-child">sdfdsf</Box>
          </Box>
        </Box>
        {/* rigth Box */}
        <Box className="ShoppingCart-rigth-box">
          <Box className="ShoppingCart-rigth-box-header">
            <Box className="ShoppingCart-rigth-box-header-child">کالا</Box>
            <Box className="ShoppingCart-rigth-box-header-child">قیمت</Box>
            <Box className="ShoppingCart-rigth-box-header-child">تعداد</Box>
            <Box className="ShoppingCart-rigth-box-header-child">جمع کل</Box>
          </Box>
          <Box className="ShoppingCart-rigth-box-col">
            <Box className="ShoppingCart-rigth-box-col-child">
              <img
                className="ShoppingCart-rigth-box-col-child-img"
                src={openSingleProduct.imgURL}
              />
              {openSingleProduct.title}
            </Box>
            <Box className="ShoppingCart-rigth-box-col-child">
              {openSingleProduct.price}
              <Typography className="tomen-font">تومان</Typography>
            </Box>
            <Box className="ShoppingCart-rigth-box-col-child">
              <Box display="flex">
                <Button
                  variant="outlined"
                  color="success"
                  onClick={() => setPrice(price + 1)}
                  className="ShoppingCart-rigth-box-col-child-add"
                >
                  +
                </Button>
                <Box className="ShoppingCart-rigth-box-col-child-number">
                  {price}
                </Box>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() =>
                    price > 0 ? setPrice(price - 1) : setPrice(price)
                  }
                  className="ShoppingCart-rigth-box-col-child-minus"
                >
                  -
                </Button>
              </Box>
            </Box>
            <Box className="ShoppingCart-rigth-box-col-child">
              {openSingleProduct.price * price}{" "}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ShoppingCart;
