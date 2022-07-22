import React from 'react'
import './mycard.style.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from './../../../assets/pic/Mask group.jpg'
import { Box } from '@mui/system';
import { useNavigate } from "react-router-dom";

function MyCard() {
  const navigate=useNavigate()
  const openSingleProductPage=function(){
    navigate("/SingleProduct")
  }
  return (
    <Card className='card' justifyContent="center" sx={{ maxWidth: "15%!important" }}>
    <CardMedia
      component="img"
      height="140"
      image={img}
      alt="green iguana"
      className='img'
    />
    <CardContent style={{textAlign:"center"}}>
      <Typography gutterBottom variant="h5" component="div">
        عینک ریوندی
      </Typography>
      <Typography variant="body2" color="text.secondary" display="flex" gap=".3rem" justifyContent="center">
      <Typography className='priceStyle'>تومان</Typography>
      <Typography className='priceStyle'>260000</Typography>
      
      </Typography>
    </CardContent>
<Box  display="flex" justifyContent="center" marginBottom="1rem" >
<Button onClick={openSingleProductPage} className="buttonStyle" variant="contained">مشاهده محصول</Button>
</Box>
  </Card>
  )
}

export default MyCard