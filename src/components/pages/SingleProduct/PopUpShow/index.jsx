import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import HoverRating from "./../Rating/index";
import "./popupshow.Module.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function BasicModalcomment() {
  const [name, setName] = useState("");
  const [textSection, setTextSection] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = function () {
    setOpen(false);
  };

  useEffect(() => {
    const res = axios.post("http://localhost:8000/eyeglasses/1", {
      name: "name",
      comment: "textSection",
    });
    console.log("responsive=", res);
  }, [handleClose]);

  return (
    <div>
      <Button onClick={handleOpen} className="comments-parts-text">
        ثبت نظر{" "}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box display="flex" justifyContent="center">
            <HoverRating></HoverRating>
            <Typography className="raiting-popUpShoe">:امتیاز بدهید</Typography>
          </Box>
          <Box display="flex" flexDirection="column" width="95%" gap="1rem">
            <input
              onChange={(e) => setName(e.target.value)}
              className="BasicModalcomment-input-input"
              placeholder="نام خود را وارد کنید"
            />
            <textarea
              onChange={(e) => setTextSection(e.target.value)}
              placeholder="پیغام خودتان را بنویسید"
              className="BasicModalcomment-input"
            />
          </Box>
          <Button
            className="popUpShow-send-data-comment"
            variant="outlined"
            onClick={(e) => handleClose(e.target.value)}
            color="success"
          >
            ارسال
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
