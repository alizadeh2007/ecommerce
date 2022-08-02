import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import {
  storageInformationJson,
  uptodateNewSort,
  uptodateSortData,
} from "../../../../redux/slice/slice";
import { useEffect } from "react";
import DirectionSensitive from "./../../../../assets/Rtl/index";

export default function Sortes() {
  const [sort, setSort] = React.useState("");
  const dispatch = useDispatch();
  const { storeInfoJsonServer } = useSelector(
    (state) => state.storeInfoJsonServer
  );
  const { newSort } = useSelector((state) => state.newSort);

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    let data = [...storeInfoJsonServer];
    if (sort === 20) {
      let cheapestData = data.sort((a, b) => Number(a.price) - Number(b.price));
      dispatch(uptodateNewSort(cheapestData));
    } else if (sort === 10) {
      let expensiveData = data.sort(
        (a, b) => Number(b.price) - Number(a.price)
      );
      dispatch(uptodateNewSort(expensiveData));
    }
  }, [sort]);

  return (
    
    <Box sx={{ minWidth: 130 }}>
        <FormControl fullWidth>
          <InputLabel className="placeholder-Style" id="demo-simple-select-label">اولویت </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sort}
            label="Sort"
            style={{ direction: "rtl!important", textAlign: "right!important" }}
            onChange={handleChange}
          >
            <MenuItem style={{direction:"rtl!important" , textAlign:"rigth!important"}} value={30}>جدید ترین محصولات</MenuItem>
            <MenuItem  value={10}>گرانترین محصولات</MenuItem>
            <MenuItem value={20}>ارزان ترین محصولات</MenuItem>
          </Select>
        </FormControl>
    </Box>
  );
}
