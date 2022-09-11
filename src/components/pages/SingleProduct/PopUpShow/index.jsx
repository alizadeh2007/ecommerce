import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import HoverRating from "./../Rating/index";
import "./popupshow.module.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Alert } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
};
export default function BasicModalcomment() {
  const [hanlerChangeType,setHanlerChangeType]=useState("none")
  const { openSingleProduct } = useSelector((state) => state.openSingleProduct);
  const { raitingStore } = useSelector((state) => state.raitingStore);
  const[successText,setSuccessText]=useState("none!important")

  const [name, setName] = useState("");
  const [textSection, setTextSection] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () =>{
    setHanlerChangeType("none")
    setOpen(true);
  } 
  const handleClose = function () {
    setSuccessText("none!important")
    setOpen(false);
  };

  const sendBTN = function () {
    if(name==""||textSection==""){
      setHanlerChangeType("flex")
    setSuccessText("none!important")

    }
    else if (openSingleProduct.category === "eyeglasses") {
        axios.put(`http://localhost:8000/eyeglasses/${openSingleProduct.id}`, {
          ...openSingleProduct,
          comments,
        });
        setOpen(false);
        setSuccessText("flex!important")
      }
  };
  const comments = [
    ...openSingleProduct.comments,
    {
      name: name,
      comment: textSection,
      rate: raitingStore,
    },
  ];

  return (
    <div>
      <Button onClick={handleOpen} className="comments-parts-text">
        ثبت نظر{" "}
      </Button>
      <Box display={successText}>

      <Alert className="alertSuccess"  severity="success">نظر شما به موفقیت ثبت شد</Alert>
      </Box>
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
            onClick={(e) => sendBTN(e.target.value)}
            color="success"
          >
            ارسال
          </Button>
          <Typography className="hanlerChangeType" display={hanlerChangeType}>.متن و نام نمی تواند خالی باشد</Typography>
          <Box display="flex" justifyContent="space-between">
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
