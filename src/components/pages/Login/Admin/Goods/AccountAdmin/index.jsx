import React from "react";
import Box from "@mui/material/Box";
import AdminHeader from "./../../../../../common/Header/AdminHeader/index";
import Button from '@mui/material/Button';
import "./accountAdmin.Module.css";
import { Typography } from "@mui/material";
function AccountAdmin() {
  return (
    <Box>
      <AdminHeader />

      <Box
        display="flex"
        justifyContent="center"
        marginTop="5rem"
        gap="2rem!important"
      >

        <Box>
          <Typography className="account-name">تغییر نام خانوادگی</Typography>
          <input className="account-input" placeholder="نام خانوادگی" />
        </Box>
        <Box>
          <Typography className="account-name">تغییر نام</Typography>
          <input className="account-input" placeholder="نام" />
        </Box>
      </Box>
      <Box display="flex"
        justifyContent="center"
        marginTop="5rem"
        gap="2rem!important">
      <Box>
          <Typography className="account-name">تکرار رمز ورود  </Typography>
          <input type="password" className="account-input" placeholder="رمز ورود" />
        </Box>
        <Box>
          <Typography className="account-name">تغییر رمز ورود  </Typography>
          <input type="password" className="account-input" placeholder="رمز ورود" />
        </Box>
      </Box>
      <Box display="flex"
        justifyContent="center"
        marginTop="5rem"
        gap="2rem!important">
      <Box>

          <Typography className="account-name">  ثبت ایمیل   </Typography>
          <input type="email" className="account-input" placeholder="رمز ورود" />
        </Box>
        <Box>
          <Typography className="account-name">  ثبت شماره تماس  </Typography>
          <input type="number" className="account-input" placeholder="رمز ورود" />
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" margin="3rem">

      <Button variant="contained" className="sendInfo">ثبت تغییرات</Button>
      </Box>
    </Box>
  );
}

export default AccountAdmin;
