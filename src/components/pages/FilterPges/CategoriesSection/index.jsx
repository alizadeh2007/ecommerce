import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
      <Box display="flex" height="100%" width="100%">
      <Box height="100%" width="32%">
        <FormControlLabel value="shirt" control={<Radio />} label="پوشاک" />
        <FormControlLabel value="chiken" control={<Radio />} label="مرغ" />
        <FormControlLabel value="shoe" control={<Radio />} label="کفش" />
        <FormControlLabel value="watch" control={<Radio />} label="ساعت" />
        <FormControlLabel value="car" control={<Radio />} label="ماشین" />
      </Box>
      <Box height="100%" width="32%">
        <FormControlLabel value="motorcycle" control={<Radio />} label="موتور" />
        <FormControlLabel value="Bike" control={<Radio />} label="دوچرخه" />
        <FormControlLabel value="Computer" control={<Radio />} label="کامپیوتر" />
        <FormControlLabel value="Sofa" control={<Radio />} label="مبل" />
        <FormControlLabel value="bed" control={<Radio />} label="تخت خواب" />
      </Box>
      <Box height="100%" width="32%">
        <FormControlLabel value="cream" control={<Radio />} label="کرم ها" />
        <FormControlLabel value="chshampooiken" control={<Radio />} label="شامپو" />
        <FormControlLabel value="mobile" control={<Radio />} label="موبایل" />
        <FormControlLabel value="Toothbrush" control={<Radio />} label="مسواک" />
        <FormControlLabel value="sport" control={<Radio />} label="ورزشی" />
      </Box>

      </Box>
      </RadioGroup>
    </FormControl>
  );
}
