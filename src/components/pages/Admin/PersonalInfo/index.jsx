import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./personalInfo.Module.css";
import Button from "@mui/material/Button";
function Order() {
  const navigate = useNavigate();
  const DashboardFn = function () {
    navigate("/Dashboard");
  };
  const OrderFn = function () {
    navigate("/Order");
  };
  const PersonalInfoFn=function(){
    navigate("/PersonalInfo");
  }
  const ExportFn=function(){
    navigate("/");

  }
  return (
    <Box>
      <Box className="Admin">
        <Typography className="Adminfont">اطلاعات شخصی</Typography>
      </Box>
      <Box className="Admin-main">
        <Box className="Admin-main-explain-left" >
          <Typography className="dashoard">
            <Box
              display="flex"
              padding="1rem"
              flexDirection="column"
              gap="2rem"
              width="30%!important"
            >
              <Box>
                <Typography className="Register-email-title">
                  نام <span className="Register-stares">*</span>
                </Typography>

                <Box className="Register-email-input-Box">
                  <input className="Register-email-input" placeholder="نام" />
                </Box>
              </Box>

              <Box>
                <Typography className="Register-email-title">
                  نام خانوادگی
                  <span className="Register-stares">*</span>
                </Typography>

                <Box
                  className="Register-email-input-Box"
                  display="flex"
                  justifyContent="center"
                >
                  <input
                    className="Register-email-input"
                    placeholder="نام خانوادگی "
                  />
                </Box>
              </Box>

              <Box>
                <Typography className="Register-email-title">
                  ایمیل
                  <span className="Register-stares">*</span>
                </Typography>
                <Box
                  className="Register-email-input-Box"
                  display="flex"
                  justifyContent="center"
                >
                  <input className="Register-email-input" placeholder="ایمیل" />
                </Box>
              </Box>

              <Box>
              <Typography fontSize="2.4rem!important" marginTop="4rem">تغییر رمز ورود</Typography>
                <Typography className="Register-email-title">
                  رمز عبور پیشین (در صورتی که قصد تغییر ندارید خالی بگذارید)
                </Typography>
                <Box
                  className="Register-email-input-Box"
                  display="flex"
                  justifyContent="center"
                >
                  <input className="Register-email-input" />
                </Box>
              </Box>

              <Box>
                <Typography className="Register-email-title">
                  رمز عبور جدید (در صورتی که قصد تغییر ندارید خالی بگذارید)
                </Typography>
                <Box
                  className="Register-email-input-Box"
                  display="flex"
                  justifyContent="center"
                >
                  <input className="Register-email-input" />
                </Box>
              </Box>

              <Box>
                <Typography className="Register-email-title">
                  تکرار رمز عبور{" "}
                </Typography>
                <Box
                  className="Register-email-input-Box"
                  display="flex"
                  justifyContent="center"
                >
                  <input className="Register-email-input" />
                </Box>
              </Box>

              <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                gap="1rem"
              >
                <Button className="send-button-Styles" variant="contained">
                  ارسال{" "}
                </Button>
              </Box>
            </Box>
          </Typography>
        </Box>
        <Box className="Admin-main-menu-rigth">
          <Typography
            className="Admin-main-menu-rigth-title"
            onClick={DashboardFn}
          >
            پیشخوان
          </Typography>
          <Typography className="Admin-main-menu-rigth-title" onClick={OrderFn}>
            سفارشات
          </Typography>{" "}
          <Typography className="Admin-main-menu-rigth-button" onClick={PersonalInfoFn}>
            اطلاعت حساب کاربری
          </Typography>{" "}
          <Typography className="Admin-main-menu-rigth-title" onClick={ExportFn}>
            خروج از سیستم{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Order;
