import React from "react";
import { Box, Switch, Typography } from "@mui/material";
import "./pants.Module.css";
import MyCard from "./../../../customs/MyCard/index";
import RangeSlider from "./../../FilterPges/RangeSlider/index";
import RadioButtonsGroup from "./../../FilterPges/CategoriesSection/index";
import { useSelector } from "react-redux";

function Pants() {
  const { storeInfoPantsJsonServer } = useSelector(
    (state) => state.storeInfoPantsJsonServer
  );

  return (
    <Box className="FilterPges">
      <Box className="FilterPges-pages">
        {storeInfoPantsJsonServer.map((item) => (
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
export default Pants;
