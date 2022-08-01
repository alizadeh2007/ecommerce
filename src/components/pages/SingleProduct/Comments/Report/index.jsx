import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import {
  uptodatOpenHereReportModal,
  uptodatOpenReportModal,
} from "../../../../../redux/slice/slice";
import "./report.Module.css";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import Button from "@mui/material/Button";
import HereReport from "./HereBtn/index";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Report() {
  const [errors, setErrors] = useState(false);
  const [comment, setComment] = useState("");
  const disPatch = useDispatch();
  const { openReportModal } = useSelector((state) => state.openReportModal);
  console.log("openReportModal", openReportModal);
  const handleClose = function () {
    disPatch(uptodatOpenReportModal(false));
  };
  const handleSend = function () {
    if (errors == "") {
      setComment("هنوز متنی ننوشته اید!");
    } else {
      disPatch(uptodatOpenReportModal(false));
    }
  };
  const openHandleReport = function () {
    disPatch(uptodatOpenHereReportModal(true));
  };

  return (
    <div>
      <Modal
        open={openReportModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            className="Report-title"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            <ReportProblemIcon className="Report-icon" />
            گزارش نقض قوانین سایت{" "}
          </Typography>
          <Box display="flex" justifyContent="flex-end">
            <Box display="flex">
              <Typography className="Report-explain-font">کلیک کنید</Typography>
              <Typography
                className="Report-explain-font-here"
                onClick={openHandleReport}
              >
                اینجا
              </Typography>
              <Typography className="Report-explain-font">
                جهت مشاهده قوانین کامنت گذاری کاربران{" "}
              </Typography>
              <HereReport />
            </Box>
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <textarea
              className="Report-input"
              onChange={(e) => setErrors(e.target.value)}
              placeholder="گزارش خودتان را بنویسید"
            ></textarea>
            <Box>
              {errors == "" ? (
                <Typography className="errors-Message">{comment}</Typography>
              ) : (
                <Typography></Typography>
              )}
              <Box className="errors-Message-Btn">
                <Button onClick={handleSend} variant="outlined" color="error">
                  ارسال
                </Button>
              </Box>
            </Box>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
