import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./successfulRigester.Module.css";
function SuccessfulRigester() {
  return (
    <Box>
      <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="40vh" flexDirection="column" gap="2rem">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography className="registerTitle">
            ثبت نام شما با موفقیت ثبت گردید
          </Typography>
        </Box>
        <Box display="flex" gap=".5rem">
          <Typography className="SuccessfulRigesterFonts"> کلیک کنید </Typography>
          <Typography className="SuccessfulRigesterFonts SuccessfulRigesterFontsHere"> اینجا </Typography>
          <Typography className="SuccessfulRigesterFonts">برای تکمیل اطلاعات شخصی خود </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SuccessfulRigester;
