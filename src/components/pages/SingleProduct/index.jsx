import React from "react";
import Box from "@mui/material/Box";
import "./singleProduct.style.css";
import singleProductImage from "./../../../assets/pic/download.png";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import garauntyPic from "./../../../assets/pic/guaranty.svg";
import moneyPic from "./../../../assets/pic/money.svg";
import { changeTypeMiniPic } from "../../../redux/slice/slice";
import { useDispatch } from "react-redux";
import PopupShow from "./PopUpShow/index";
import deliverPic from "./../../../assets/pic/Delivery .svg";
import deliverPic1 from "./../../../assets/pic/deliver1.svg";
import deliverPic2 from "./../../../assets/pic/deliver2.svg";
import deliverPic3 from "./../../../assets/pic/deliver3.svg";
import deliverPic4 from "./../../../assets/pic/deliver4.svg";
import SinglePageAccordion from "./AccordionSingleProduct/index";
function SingleProduct() {
  const disPatch = useDispatch();
  const miniPicShows = function () {
    disPatch(changeTypeMiniPic(true));
  };
  return (
    <Box>
      <Box className="ContactUs">
        <Typography className="ContactUsfont">مشاهده محصول</Typography>
      </Box>
      <Typography className="watch-Product">خانه/مشاهده محصول</Typography>
      <Box display="flex" height="55vh" justifyContent="center">
        <Box className="Single-Product-section-parent">
          <Box className="Single-Product-about-product">
            <Box className="Single-Product-about-product-sections">
              <Typography className="Single-Product-about-product-title-sections">
                سلامت کالا
              </Typography>
              <img
                className="Single-Product-about-product-img"
                src={deliverPic1}
              />
            </Box>
            <Box className="Single-Product-about-product-sections">
              <Typography className="Single-Product-about-product-title-sections">
                ارسال به بین المللی
              </Typography>
              <img
                className="Single-Product-about-product-img"
                src={deliverPic2}
              />
            </Box>
            <Box className="Single-Product-about-product-sections">
              <Typography className="Single-Product-about-product-title-sections">
                ارسال کالا
              </Typography>
              <img
                className="Single-Product-about-product-img"
                src={deliverPic3}
              />
            </Box>
            <Box className="Single-Product-about-product-sections">
              <Typography className="Single-Product-about-product-title-sections">
                ارسال های هوایی
              </Typography>
              <img
                className="Single-Product-about-product-img"
                src={deliverPic4}
              />
            </Box>
            <Box className="Single-Product-about-product-sections">
              <SinglePageAccordion></SinglePageAccordion>
            </Box>
          </Box>
          <Box display="Single-Product-section">
            <Box className="Single-Product">
              <Typography className="Single-Product-Title">
                مشخصات کفش آریا
              </Typography>
              <Box className="Single-Product-info">
                <Typography className="Single-Product-Explain">
                  کف پوش نانو در طرح و رنگ متفاوت با ده درصد تخفیف. این کالا در
                  چهار رنگ متفاوت عرضه می گردد. کف پوش نانویی این محصول قابل
                  تعویض و با یک کف پوش اضافه می باشد.
                </Typography>
                <Box display="flex" gap=".3rem">
                  <img
                    className="Single-Product-garauntyPic"
                    src={garauntyPic}
                  />
                  <Typography className="Single-Product-guaranty">
                    18
                  </Typography>
                  <Typography className="Single-Product-guaranty">
                    ماه گارانتی
                  </Typography>
                </Box>
                <Box display="flex">
                  <img className="Single-Product-moneyPic" src={moneyPic} />

                  <Typography className="Single-Product-Price">
                    270000
                  </Typography>
                  <Typography className="Single-Product-Price">
                    تومان
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="center">
                  <Button className="Single-Product-button" variant="contained">
                    افزودن به سبد
                  </Button>
                </Box>

                <Box className="Single-Product-payAttention">
                  <ErrorOutlineOutlinedIcon></ErrorOutlineOutlinedIcon>
                  <Typography>
                    امکان برگشت کالا تنها در صورتی مورد قبول است که پلمب کالا
                    باز نشده باشد
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="Single-transition-Product">
              <Box className="Single-Product-transition-info">
                <img className="deliverPic" src={deliverPic} />
                <Typography className="Single-Product-Explain">
                  ارسال کالا بالای پانصد هزار تومان رایگان است. برای مشاهده قیمت
                  و شرایط ارسال کالا
                  <Typography className="hereButton">اینجا</Typography>
                  {""}
                  کلیک کنید.
                  {""}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          width="40%"
          height="100%"
          display="flex"
          flexDirection="column"
          alignContent="center"
          justifyContent="center"
        >
          <Box
            display="flex"
            width="100%"
            justifyContent="center"
            alignContent="center"
          >
            <img className="single-Product-Image" src={singleProductImage} />
          </Box>
          <Box display="flex" gap="1rem" justifyContent="center">
            <img
              onClick={miniPicShows}
              className="single-Product-mini-Image"
              src={singleProductImage}
            />
            <img
              onClick={miniPicShows}
              className="single-Product-mini-Image"
              src={singleProductImage}
            />
            <img
              onClick={miniPicShows}
              className="single-Product-mini-Image"
              src={singleProductImage}
            />
            <PopupShow></PopupShow>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SingleProduct;
