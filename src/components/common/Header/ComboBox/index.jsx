
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './ComboBox.style.css'
export default function ComboBox() {

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      className='ComboBoxInput-parent'
      sx={{ width: 150,bgcolor:"#F6BD32", border:"none!important", textAlign: "end!important"}}
      renderInput={(params) => <TextField  className='ComboBoxInput' {...params} placeholder="همه دسته بندی ها"  />}
    />
  );
}

const top100Films = [
  { label: 'پوشاک', year: 1994 },
  { label: 'خوراکی ها', year: 1972 },
  { label: 'موبایل', year: 1974 },
  { label: 'کمپیوتر', year: 2008 },
  { label: 'اشپزخانه', year: 1957 },
  { label: "عینک", year: 1993 },
  { label: 'گرمایشی و سرمایشی', year: 1994 },
];
