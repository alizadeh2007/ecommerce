import React, { useState } from "react";
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
import { useSelector } from "react-redux";
function Comments({ propsComment }) {
  const { raitingStore } = useSelector((state) => state.raitingStore);
const[changeTypeThumUp,setChangeTypeThumUp]=useState("flex")
const[changeTypeThumDown,setChangeTypeThumDown]=useState("flex")
const[changeTypeThumUpActive,setChangeTypeThumUpActive]=useState("none!important")
const[changeTypeThumDownActive,setChangeTypeThumDownActive]=useState("none!important")

const changeTypeThumUpFun=function(){
  setChangeTypeThumUp("none!important")
  setChangeTypeThumUpActive("flex")
  setChangeTypeThumDownActive("none")
  setChangeTypeThumDown("flex!important")
}
const changeTypeThumDownFun=function(){
  setChangeTypeThumDown("none!important")
  setChangeTypeThumUp("flex!important")
  setChangeTypeThumUpActive("none")
  setChangeTypeThumDownActive("flex") 
}
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
          <Box paddingLeft="3rem">
            <GppBadIcon className="GppBadIcon" onClick={handelOpenReport} />
            <Typography fontWeight="bold!important" className="font-GppBadIcon">
              گزارش
            </Typography>
            <Report></Report>
          </Box>
          <Box display="flex" gap="2rem">
            <Box
              className="comments-section-date-title"
              display="flex"
              gap=".5rem"
            >
              <Box display="flex" paddingRight="2rem">
                <Typography className="rateColor">
                  {propsComment.rate}
                </Typography>
                <Typography className="rateColor">:امتیاز کاربر</Typography>
              </Box>
              <Box className="comments-section-date-title">
                {propsComment.name}
                <PersonPinIcon></PersonPinIcon>
              </Box>
            </Box>
            <Box className="comments-section-date">

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
            <Box display={changeTypeThumUp} onClick={changeTypeThumUpFun}>
              <ThumbUpOffAltIcon className="massage-sub-section-text-range-icon-up" />
            </Box>
            <Box display={changeTypeThumUpActive}>
              <ThumbUpOffAltIcon className="massage-sub-section-text-range-icon-up-active" />
            </Box>
            <Box display={changeTypeThumDown} onClick={changeTypeThumDownFun}>
              <ThumbDownOffAltIcon className="massage-sub-section-text-range-icon-down" />
            </Box>
            <Box display={changeTypeThumDownActive}>
              <ThumbDownOffAltIcon className="massage-sub-section-text-range-icon-down-active" />
            </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Comments;
