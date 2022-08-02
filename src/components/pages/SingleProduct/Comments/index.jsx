import React from "react";
import { Box } from "@mui/material";
import "./comments.Module.css";
import GppBadIcon from "@mui/icons-material/GppBad";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { uptodatOpenReportModal } from "../../../../redux/slice/slice";
import Report from "./Report";
function Comments({ propsComment }) {
  const dispatch = useDispatch();
  const handelOpenReport = function () {
    dispatch(uptodatOpenReportModal(true));
  };
  return (
    <Box marginTop="4rem">
      <Box>
        <Box
          display="flex"
          justifyContent="space-between"
          className="comments-section-date-parent"
        >
          <Box paddingLeft="3rem" >
            <GppBadIcon className="GppBadIcon" onClick={handelOpenReport}  />
            <Typography fontWeight="bold!important" className="font-GppBadIcon">
              گزارش
            </Typography>
            <Report></Report>
          </Box>
          <Box display="flex" gap="2rem">
            <Box className="comments-section-date-title">
              {propsComment.name}
              <PersonPinIcon></PersonPinIcon>
            </Box>
            <Box className="comments-section-date">
              <Typography className="comments-section-date-title">
                1395
              </Typography>
              <Typography className="comments-section-date-title">
                مرداد
              </Typography>
              <Typography className="comments-section-date-title">5</Typography>
            </Box>
          </Box>
        </Box>
        {/* massage section */}
        <Box className="massage-section">
          <Box className="massage-sub-section">
            <Typography className="massage-sub-section-text">
              {propsComment.comment}
            </Typography>
            <Box className="massage-sub-section-text-range">
              <ThumbUpOffAltIcon className="massage-sub-section-text-range-icon-up" />
              <ThumbDownOffAltIcon className="massage-sub-section-text-range-icon-down" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Comments;
