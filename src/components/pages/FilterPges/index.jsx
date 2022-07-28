import React, { useEffect, useState } from "react";
import { Box, Pagination, Switch, Typography } from "@mui/material";
import "./filterPage.Module.css";
import MyCard from "../../customs/MyCard";
import RangeSlider from "./RangeSlider/index";
import RadioButtonsGroup from "./CategoriesSection/index";
import { useDispatch, useSelector } from "react-redux";
import Sortes from "./Sortes/index";
import { uptodateNewSort } from "../../../redux/slice/slice";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@material-ui/core/IconButton";
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
    console.log("inga hstam");
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
  const backBtn = function(){
    if(+page>1){
      setPage(+page-1)
    } else{return setPage(+page)}
  }
  const forwardBtn = function(){
    if(+page>=0){
      setPage(Number(page)+1)
    } else{return setPage(+page)}
  }
  return (
    <Box className="FilterPges">
      <Box display="block!important" width="100%!important">
        <Box className="FilterPges-pages" width="100%!important">
          {paginate(newSort, 12, +page)?.map((item) => (
            <MyCard title={item.title} price={item.price} image={item.imgURL} />
          ))}
        </Box>
        <Box display="flex" justifyContent="center" alignItems="flex-start">
          <Box display="flex" alignItems="center" gap="2rem">
            <IconButton onClick={backBtn}>
              <ArrowBackIosNewIcon className="pagination-icon" />
            </IconButton>
            {page}
            <IconButton onClick={forwardBtn}>
              <ArrowForwardIosIcon className="pagination-icon" />
            </IconButton>
          </Box>
        </Box>
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
