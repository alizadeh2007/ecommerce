import React from 'react'
import './city.Module.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
function City() {
   

  return (
    <div>
    <Box display="flex" justifyContent="flex-end">
    <Typography className='city-choose'>*استان خودتان انتخاب کنید</Typography>
    </Box>
<select className='select-city' name="استان" id="state">
<option value="1">آذربایجان شرقی</option>
<option value="2">آذربایجان غربی</option>
<option value="3">اردبیل</option>
<option value="4">اصفهان</option>
<option value="5">ایلام</option>
<option value="6">بوشهر</option>
<option value="7">تهران</option>
<option value="8">چهارمحال و بختیاری</option>
<option value="9">خراسان جنوبی</option>
<option value="10">خراسان رضوی</option>
<option value="11">خراسان شمالی</option>
<option value="12">خوزستان</option>
<option value="13">زنجان</option>
<option value="14">سمنان</option>
<option value="15">سیستان و بلوچستان</option>
<option value="18">قم</option>
<option value="19">کردستان</option>
<option value="20">کرمان</option>
<option value="21">کرمانشاه</option>
<option value="22">کهگیلویه و بویراحمد</option>
<option value="23">گلستان</option>
<option value="24">گیلان</option>
<option value="25">لرستان</option>
<option value="26">مازندران</option>
<option value="27">مرکزی</option>
<option value="28">هرمزگان</option>
<option value="29">همدان</option>
<option value="30">یزد</option>

</select>
    </div>
  )
}

export default City