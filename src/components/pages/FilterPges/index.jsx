import React, { useEffect, useState } from "react";
import { Box, Switch, Typography } from "@mui/material";
import "./filterPage.Module.css";
import MyCard from "../../customs/MyCard";
import RangeSlider from "./RangeSlider/index";
import RadioButtonsGroup from "./CategoriesSection/index";
import { useDispatch, useSelector } from "react-redux";
import Sortes from "./Sortes/index";
import { uptodateNewSort } from "../../../redux/slice/slice";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import DirectionSensitive from "./../../../assets/Rtl/index";
// Filterpges is eyeGlass component
function FilterPges() {
  const dispatch = useDispatch();
  const { searchEyesGlass } = useSelector((state) => state.searchEyesGlass);
  const { storeInfoJsonServer } = useSelector(
    (state) => state.storeInfoJsonServer
  );
  // create new data to sort in sortes component
  const { newSort } = useSelector((state) => state.newSort);

  // search data
  useEffect(() => {
    dispatch(uptodateNewSort([...storeInfoJsonServer]));
    let finderCard = newSort.filter((item) =>
      item.title.includes(searchEyesGlass) ? item : null
    );
    if (searchEyesGlass) {
      dispatch(uptodateNewSort(finderCard));
    } else {
      dispatch(uptodateNewSort(storeInfoJsonServer));
    }
  }, [searchEyesGlass]);

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
  // switch BTN for eyeGlass btn
  const handelSwitchBtn = function (e) {
    const blackEyesGlass = [...storeInfoJsonServer];
    if (e.target.checked === true) {
      const getBlackColor = blackEyesGlass.filter(
        (card) => card.property.color === "دودی"
      );
      dispatch(uptodateNewSort(getBlackColor));
    } else {
      dispatch(uptodateNewSort(storeInfoJsonServer));
    }
  };
  // airplain Eyes Glass SwitchBtn
  const airplainEyesGlassSwitchBtn = function (e) {
    const airplainEyesGlass = [...storeInfoJsonServer];
    if (e.target.checked === true) {
      const getairplainEyesGlass = airplainEyesGlass.filter(
        (card) => card.property.style === "خلبانی"
      );
      dispatch(uptodateNewSort(getairplainEyesGlass));
    } else {
      dispatch(uptodateNewSort(storeInfoJsonServer));
    }
  };
  //plastic EyesGlass Switch Btn
  const plasticEyesGlassSwitchBtn = function (e) {
    const plasticEyesGlass = [...storeInfoJsonServer];
    if (e.target.checked === true) {
      const getplasticEyesGlass = plasticEyesGlass.filter(
        (card) => card.property.material === "پلاستیک"
      );
      dispatch(uptodateNewSort(getplasticEyesGlass));
    } else {
      dispatch(uptodateNewSort(storeInfoJsonServer));
    }
  };
  return (
    <Box className="FilterPges">
      <Box className="FilterPges-pages-card-Generate">
        <Box className="FilterPges-pages-card-Generate">
          {paginate(newSort, 10, +page)?.map((item) => (
            <MyCard item={item} title={item.title} price={item.price} image={item.imgURL} id={item.id} />
          ))}
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="2rem"
          width="100%"
        >
          <ArrowBackIosNewIcon className="pagination-icon" onClick={backBtn} />
          {page}
          <ArrowForwardIosIcon
            className="pagination-icon"
            onClick={forwardBtn}
          />
        </Box>
      </Box>
      <Box className="FilterPges-filters">
        <Typography className="FilterPges-filters-title">فیلتر</Typography>
        {/* <Box className="FilterPges-filters-rangslider">
          <RangeSlider></RangeSlider>
        </Box> */}
        <DirectionSensitive>
          <Box
            className="FilterPges-filters-Available"
            justifyContent="center!important"
            width="100%!important"
          >
            <Sortes />
          </Box>
        </DirectionSensitive>

        <Box className="FilterPges-filters-Available">
          <Typography className="FilterPges-filters-Available-title">
            فقط دودی{" "}
          </Typography>
          <Switch onChange={handelSwitchBtn} />
        </Box>
        <Box className="FilterPges-filters-Available">
          <Typography className="FilterPges-filters-Available-title">
            فقط خلبانی{" "}
          </Typography>
          <Switch onChange={airplainEyesGlassSwitchBtn} />
        </Box>

        <Box className="FilterPges-filters-Available">
          <Typography className="FilterPges-filters-Available-title">
            فقط پلاستیکی{" "}
          </Typography>
          <Switch onChange={plasticEyesGlassSwitchBtn} />
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
