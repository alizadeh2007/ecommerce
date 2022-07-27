import React, { useEffect, useState } from "react";
import { Box, Switch, Typography } from "@mui/material";
import "./filterPage.Module.css";
import MyCard from "../../customs/MyCard";
import RangeSlider from "./RangeSlider/index";
import RadioButtonsGroup from "./CategoriesSection/index";
import { useDispatch, useSelector } from "react-redux";
import {
  storageInformationJson,
  uptodateSearchEyesGlass,
} from "../../../redux/slice/slice";
import Button from "@mui/material/Button";
import Sortes from "./Sortes/index";

function FilterPges() {
  const dispatch = useDispatch();
  const { searchEyesGlass } = useSelector((state) => state.searchEyesGlass);
  const { storeInfoJsonServer } = useSelector(
    (state) => state.storeInfoJsonServer
  );
  const [store, setStore] = useState([...storeInfoJsonServer]);
  useEffect(() => {
    let finderCard = store.filter((item) =>
      item.title.includes(searchEyesGlass) ? item : null
    );
    if (searchEyesGlass) {
      setStore(finderCard);
    } else {
      setStore(storeInfoJsonServer);
    }
  }, [searchEyesGlass]);

  return (
    <Box className="FilterPges">
      <Box className="FilterPges-pages">
        {store?.map((item) => (
          <MyCard title={item.title} price={item.price} image={item.imgURL} />
        ))}
      </Box>
      <Box className="FilterPges-filters">
        <Typography className="FilterPges-filters-title">فیلتر</Typography>
        <Box className="FilterPges-filters-rangslider">
          <RangeSlider></RangeSlider>
        </Box>
        <Box className="FilterPges-filters-Available" width="100%!important">
          <Sortes width="100%!important" />
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
