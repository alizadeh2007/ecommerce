import React from "react";
import Slider from "@material-ui/core/Slider";
import Box from "@mui/material/Box";
import "./rangeslider.Module.css";
const RangeSlider = () => {
  const [value, setValue] = React.useState([20, 100]);

  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  return (
    <Box className="rangeSlider">

      <Slider
        className="rangeSlider"
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
      />
      قیمت بین {value[0] * 1000} تا {value[1] * 10000} تومان
    </Box>
  );
};

export default RangeSlider;
