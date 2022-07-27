import React from "react";
import { Box, Switch, Typography } from "@mui/material";
import "./filterPage.Module.css";
import MyCard from "../../customs/MyCard";
import RangeSlider from "./RangeSlider/index";
import RadioButtonsGroup from "./CategoriesSection/index";
import { storageInformationJson } from "../../../redux/slice/slice";
import { useSelector } from "react-redux";

function FilterPges() {
  const { storeInfoJsonServer } = useSelector(
    (state) => state.storeInfoJsonServer
  );

  return (
    <Box className="FilterPges">
      <Box className="FilterPges-pages">
        {storeInfoJsonServer.map((item) => (
          <MyCard title={item.title} price={item.price} image={item.imgURL} />
        ))}
      </Box>
      <Box className="FilterPges-filters">
        <Typography className="FilterPges-filters-title">فیلتر</Typography>
        <Box className="FilterPges-filters-rangslider">
          <RangeSlider></RangeSlider>
        </Box>
        <Box className="FilterPges-filters-Available">
          <Typography className="FilterPges-filters-Available-title">
            فقط کالای موجود
          </Typography>
          <Switch />
        </Box>
        <Box className="FilterPges-filters-Available">
          <Typography className="FilterPges-filters-Available-title">
            فقط سوپر مارکتی{" "}
          </Typography>
          <Switch />
        </Box>
        <Box className="FilterPges-filters-Categories">
          <Typography className="FilterPges-filters-Available-title">
            سایر دسته بندی ها{" "}
          </Typography>
          <RadioButtonsGroup></RadioButtonsGroup>
        </Box>
      </Box>
    </Box>
  );
}
export default FilterPges;
