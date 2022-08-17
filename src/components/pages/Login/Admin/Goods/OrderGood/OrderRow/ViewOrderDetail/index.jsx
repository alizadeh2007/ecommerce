import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import "./ViewDetails.Module.css";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { upDetailsOrders, upDetailsOrdersStore } from "../../../../../../../../redux/slice/slice";
import ViewBody from "./ViewBody/index";

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
  height: "80vh",
  overflow: "scroll"
};

export default function DetailsOrder() {
  const disPatch = useDispatch();
  const { DetailsOrders } = useSelector((state) => state.DetailsOrders);
  const { DetailsOrdersStore } = useSelector(
    (state) => state.DetailsOrdersStore
  );
  console.log("DetailsOrdersStore=",DetailsOrdersStore.card[0].title)
  const handleClose = () => {
    disPatch(upDetailsOrders(false));
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={DetailsOrders}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={DetailsOrders}>
          <Box sx={style}>
          {DetailsOrdersStore.card.map((item)=><ViewBody item={item}/>)}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
