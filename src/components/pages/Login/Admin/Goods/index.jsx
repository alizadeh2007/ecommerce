import "./goods.Module.css";
import Box from "@mui/material/Box";
// import React, { useEffect, useState } from "react";
// import Typography from "@mui/material/Typography";
// import { useNavigate } from "react-router";
import AdminHeader from "./../../../../common/Header/AdminHeader/index";

import { useDispatch, useSelector } from "react-redux";
import {
  upAddProductCMD,
  upjsonData,
  upjsonDataPants,
  upjsonDataShirts,
  upModalView,
  upSelectMath,
  upSelectProduct,
  upToDateChangeIcon,
  upToDateChangePersonIcn,
} from "../../../../../redux/slice/slice";
import OpenViewProduct from "./ViewProduct/index";
import { useEffect, useState } from "react";
import axios from "axios";
import SelectCMD from "./SelectCMD/index";
import OpenEditProduct from "./EditGood/index";
import DeleteModal from "./DeleteGoods/index";
import AddProduct from './AddProduct/index';
import { Pagination } from "@mui/material";


function Goods() {
  const disPatch = useDispatch();
  const { jsonData } = useSelector((state) => state.jsonData);
  const { jsonDataPants } = useSelector((state) => state.jsonDataPants);
  const { jsonDataShirts } = useSelector((state) => state.jsonDataShirts);
  const { SelectProduct } = useSelector((state) => state.SelectProduct);
  const { SelectMath } = useSelector((state) => state.SelectMath);
  
//SelectMath
  const [page, setPage] = useState(1);
  // pagination Section
  function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }
  const handlePaginate=(e,p)=>{
    setPage(p);
  }
  const selectFn = (e) => {
    disPatch(upSelectProduct(e.target.value));
  };
  const openModalAdd=()=>{
    disPatch(upAddProductCMD(true))
  }

  useEffect(() => {
    if(localStorage.getItem("Atoken")){
      disPatch(upToDateChangePersonIcn("flex"))
      disPatch(upToDateChangeIcon("none"))
          }else(
            disPatch(upToDateChangePersonIcn("none"))
          )
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

  const openModalView = () => {
    disPatch(upModalView(true));
  };


  return (
    <Box>
      <Box>
        <AdminHeader />
      </Box>
      <Box
        padding="3rem"
        width="100%"
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
          <OpenEditProduct />
          <DeleteModal />
          <AddProduct/>
          {SelectProduct === "eye"
            ?disPatch(upSelectMath(Math.ceil(jsonData.length/6))) && paginate(jsonData, 6, page)?.map((item) => {
                return <SelectCMD item={item} />;
              })
            : SelectProduct === "pan"

            //jsonDataPants
            ?disPatch(upSelectMath(Math.ceil(jsonDataPants.length/6))) && paginate(jsonDataPants, 6, page)?.map((item) => {
                return <SelectCMD item={item} />;
              })
            : SelectProduct === "shirt"
            ? disPatch(upSelectMath(Math.ceil(jsonDataShirts.length/6))) && paginate(jsonDataShirts, 6, page)?.map((item) => {
                return <SelectCMD item={item} />;
              })
            :disPatch(upSelectMath(Math.ceil(jsonData.length/6))) && paginate(jsonData, 6, page)?.map((item) => {
                return <SelectCMD item={item} />;
              })}

          <Box onClick={openModalAdd} className="goods-add"> + افزودن</Box>
              <Box marginTop="2rem" marginBottom="2rem">
              <Pagination color="primary" page={page} onChange={handlePaginate}  defaultPage={1}  count={SelectMath} variant="outlined" shape="rounded" />
              </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Goods;
