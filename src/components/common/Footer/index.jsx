import React from 'react'
import { Box, Typography } from '@mui/material';
import './footer.style.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  return (
    <Box className='footer'>
        <Box className='fontStylesParent'>
            <Typography className='fontStylesTitle' fontWeight="bold">پیکاب در شبکه های اجتماعی</Typography>
            <Box display="flex" gap="1rem">
            <InstagramIcon className='icons'></InstagramIcon>
            <TelegramIcon className='icons'></TelegramIcon>
            <LinkedInIcon className='icons'></LinkedInIcon>
            </Box>
            <Box display="flex">
                <Box className='footerstyleforinputregistration'>ثبت</Box>
                <input className='footerstyleforinput'  placeholder='ایمیل'/>
            </Box>
        </Box>
        <Box className='fontStylesParent'>
            <Typography className='fontStylesTitle' fontWeight="bold">پیکاب شما شماره 1</Typography>
            <Typography className='fontStyles'>پیکاب شما</Typography>
            <Typography className='fontStyles'>پیکاب شما</Typography>
            <Typography className='fontStyles'>پیکاب شما</Typography>
            <Typography className='fontStyles'>پیکاب شما</Typography>
        </Box>
        <Box className='fontStylesParent'>
            <Typography className='fontStylesTitle' fontWeight="bold">پیکاب شما شماره 2</Typography>
            <Typography className='fontStyles'>پیکاب شما</Typography>
            <Typography className='fontStyles'>پیکاب شما</Typography>
            <Typography className='fontStyles'>پیکاب شما</Typography>
            <Typography className='fontStyles'>پیکاب شما</Typography>
        </Box>
        <Box className='fontStylesParent'>
            <Typography className='fontStylesTitle' fontWeight="bold">پیکاب شما شماره 3</Typography>
            <Typography className='fontStyles'>پیکاب شما</Typography>
            <Typography className='fontStyles'>پیکاب شما</Typography>
            <Typography className='fontStyles'>پیکاب شما</Typography>
            <Typography className='fontStyles'>پیکاب شما</Typography>
        </Box>
    </Box>
  )
}

export default Footer