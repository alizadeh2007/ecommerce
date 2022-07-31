import React from "react";
import "./mycard.style.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { uptodateopenSingleProduct } from "../../../redux/slice/slice";
import { useSelector } from "react-redux";

function MyCard({ title, price, image, item, id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { openSingleProduct } = useSelector((state) => state.openSingleProduct);
  console.log("total card=", item);

  const openSingleProductPage = function (values) {
    console.log("item=", item);
    dispatch(uptodateopenSingleProduct(item));
    navigate("/SingleProduct");
  };

  return (
    <Card
      className="card"
      justifyContent="center"
      sx={{ maxWidth: "10%!important" }}
    >
      <CardMedia
        component="img"
        height="150"
        image={image}
        alt="green iguana"
        className="img"
      />
      <CardContent style={{ textAlign: "center" }}>
        <Typography
          gutterBottom
          className="mycard-Title-Style"
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          display="flex"
          gap=".3rem"
          justifyContent="center"
        >
          <Typography className="priceStyle">تومان</Typography>
          <Typography className="priceStyle">{price}</Typography>
        </Typography>
      </CardContent>
      <Box className="mycard-button-style">
        <Button
          onClick={(e) => openSingleProductPage()}
          className="buttonStyle"
          variant="contained"
        >
          مشاهده محصول
        </Button>
      </Box>
    </Card>
  );
}

export default MyCard;
