import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./empty.style.css";
import basketImage from "./../../../assets/pic/shopping-cart.png";
function EmptyBasket() {
  return (
    <Box>
      <Box className="EmptyBasket">
        <Typography className="EmptyBasketfont">سبد خرید شما</Typography>
      </Box>
      <Box
        display="flex"
  flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <img className="imgBasket" src={basketImage} />
        <Typography className="fontStyletitlebasket">سبد خرید شما خالی است</Typography>
      </Box>
 
    </Box>
  );
}

export default EmptyBasket;
