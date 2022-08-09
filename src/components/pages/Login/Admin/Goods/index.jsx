import "./goods.Module.css";
import Box from "@mui/material/Box";
// import React, { useEffect, useState } from "react";
// import Typography from "@mui/material/Typography";
// import { useNavigate } from "react-router";
import AdminHeader from "./../../../../common/Header/AdminHeader/index";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch, useSelector } from "react-redux";
import {
  upjsonData,
  upjsonDataPants,
  upjsonDataShirts,
  upModalView,
} from "../../../../../redux/slice/slice";
import OpenViewProduct from "./ViewProduct/index";
import { useEffect, useState } from "react";
import axios from "axios";
import SelectCMD from "./SelectCMD/index";
import OpenEditProduct from './EditGood/index';
function Goods() {
  const [selection, setSelect] = useState("");
  const disPatch = useDispatch();
  console.log("selection=", selection);
  useEffect(() => {
    axios
      .get("http://localhost:8000/eyeglasses")
      .then((res) => disPatch(upjsonData(res.data)));
    axios
      .get("http://localhost:8000/pants")
      .then((res) => disPatch(upjsonDataPants(res.data)));
    axios
      .get("http://localhost:8000/shirts")
      .then((res) => disPatch(upjsonDataShirts(res.data)));
  }, []);
  const { jsonData } = useSelector((state) => state.jsonData);
  const { jsonDataPants } = useSelector((state) => state.jsonDataPants);
  const { jsonDataShirts } = useSelector((state) => state.jsonDataShirts);
  // jsonDataShirts
  // const navigate = useNavigate();
  const openModalView = () => {
    disPatch(upModalView(true));
  };
  const selectFn = (e) => {
    setSelect(e.target.value);
  };
  return (
    <Box>
      <Box>
        <AdminHeader />
      </Box>
      <Box
        padding="3rem"
        width="100%"
        // height="30vh"
        display="flex"
        marginTop="4rem"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box className="Goods-tyble">
            <Box className="Goods-tyble-row-delete"></Box>
            <Box className="Goods-tyble-row">
              <select
                onClick={selectFn}
                className="categories-goods"
                v-model="selected"
                id="cars"
              >
                <option disabled value="">
                  دسته بندی
                </option>
                <option value="eye">عینک</option>
                <option value="pan">شلوار</option>
                <option value="shirt">پیراهن</option>
              </select>
            </Box>
            <Box className="Goods-tyble-row">نام کالا</Box>
            <Box className="Goods-tyble-row-pic">تصویر</Box>
          </Box>
          <OpenViewProduct />
<OpenEditProduct/>
          {selection === "eye"
            ? jsonData.map((item) => {
                return <SelectCMD item={item} />;
              })
            : selection === "pan"
            ? jsonDataPants.map((item) => {
                return <SelectCMD item={item} />;
              })
            : selection === "shirt"
            ? jsonDataShirts.map((item) => {
                return <SelectCMD item={item} />;
              })
            : ""}

          <Box className="goods-add"> + افزودن</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Goods;
