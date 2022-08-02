import React from "react";
import Box from "@mui/material/Box";
import "./sameProduct.Module.css";
import MyCard from "../../../customs/MyCard/index";
import { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";
function SameProduct({ productProps }) {
// change same product Box with diffrent product
  const sameProductsBox = function () {
    if (productProps == "eyeglasses") {
      return eyesGlassess;
    } else if (productProps == "pants") {
      return pants;
    } else if (productProps == "shoes") {
      return shoes;
    }
  };
  // pagination
  function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }
  // state for change page in pagination
  const [page, setPage] = useState("1");
  const backBtn = function () {
    if (+page > 1) {
      setPage(+page - 1);
    } else {
      return setPage(+page);
    }
  };
  const forwardBtn = function () {
    if (+page >= 0) {
      setPage(Number(page) + 1);
    } else {
      return setPage(+page);
    }
  };
  const [eyesGlassess, setEyesGlassess] = useState([]);
  const [pants, setPants] = useState([]);
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/eyeglasses/")
      .then((res) => setEyesGlassess(res.data.slice(0, 20)));
    axios
      .get("http://localhost:8000/pants/")
      .then((res) => setPants(res.data.slice(0, 20)));
    axios
      .get("http://localhost:8000/shoes/")
      .then((res) => setShoes(res.data.slice(0,20)));
  }, []);
  return (
    <Box>
      <Box className="SameProduct">
        <ArrowBackIosNewIcon
          className="pagination-icon pagination-icon-samePage"
          onClick={backBtn}
        />
        {paginate(sameProductsBox(), 5, +page)?.map((item) => (
          <MyCard
            item={item}
            title={item.title}
            price={item.price}
            image={item.imgURL}
          />
        ))}
        <ArrowForwardIosIcon
          className="pagination-icon pagination-icon-samePage"
          onClick={forwardBtn}
        />
      </Box>
    </Box>
  );
}

export default SameProduct;
