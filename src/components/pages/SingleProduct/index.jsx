import React from "react";
import Box from "@mui/material/Box";
import "./singleProduct.style.css";
import singleProductImage from "./../../../assets/pic/download.png";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import garauntyPic from './../../../assets/pic/guaranty.svg'
import moneyPic from './../../../assets/pic/money.svg'
function SingleProduct() {
  return (
    <Box>
      <Box display="flex" height="60vh" justifyContent="center">
        <Box className="Single-Product-section" width="50%" height="100%">
          <Box className="Single-Product">
            <Typography className="Single-Product-Title">
              مشخصات کفش آریا
            </Typography>
            <Box className="Single-Product-info">
              <Typography className="Single-Product-Explain">
                کف پوش نانو در طرح و رنگ متفاوت با ده درصد تخفیف
              </Typography>
              <Box display="flex" gap=".3rem">
              <img className="Single-Product-garauntyPic" src={garauntyPic}/>
                <Typography className="Single-Product-guaranty">18</Typography>
                <Typography className="Single-Product-guaranty">
                  ماه گارانتی
                </Typography>
              </Box>
              <Box display="flex">
          <img className="Single-Product-moneyPic" src={moneyPic} />

                <Typography className="Single-Product-Price">270000</Typography>
                <Typography className="Single-Product-Price">تومان</Typography>
              </Box>
              <Box display="flex" justifyContent="center">
                <Button className="Single-Product-button" variant="contained">
                  افزودن به سبد
                </Button>
              </Box>

              <Box className="Single-Product-payAttention">
                <ErrorOutlineOutlinedIcon></ErrorOutlineOutlinedIcon>
                <Typography>
                  امکان برگشت کالا تنها در صورتی مورد قبول است که پلمب کالا باز
                  نشده باشد
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box width="50%" height="100%">
          <img className="single-Product-Image" src={singleProductImage} />
        </Box>
      </Box>
    </Box>
  );
}

export default SingleProduct;
