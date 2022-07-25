import * as React from "react";
import Box from "@mui/material/Box";
import MainImage from "../../../../assets/pic/download.png";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { changeTypeMiniPic } from "../../../../redux/slice/slice";
import "./popupshow.module.css";
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

export default function PopupShow() {
  const { openModalShowMiniPic } = useSelector(
    (state) => state.openModalShowMiniPic
  );
  const dispatch = useDispatch();
  const handleClose = function () {
    dispatch(changeTypeMiniPic(false));
  };

  return (
    <div>
      <Modal
        open={openModalShowMiniPic}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img  src={MainImage} />
        </Box>
      </Modal>
    </div>
  );
}
