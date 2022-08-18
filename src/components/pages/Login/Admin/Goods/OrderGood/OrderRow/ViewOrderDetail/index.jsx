import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import "./ViewDetails.Module.css";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  upDetailsOrders,
  upDetailsOrdersStore,
} from "../../../../../../../../redux/slice/slice";
import ViewBody from "./ViewBody/index";
import "./ViewDetails.Module.css";
import { Alert } from "@mui/material";
import { useState } from "react";
import axios from "axios";

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
  overflow: "scroll",
};

export default function DetailsOrder() {
  const navigate=useNavigate()
  const [deliver, setDeliver] = useState("none!important");
  const [deliverBtn, setDeliverBtn] = useState("flex!important");

  const disPatch = useDispatch();
  const { DetailsOrders } = useSelector((state) => state.DetailsOrders);
  const { DetailsOrdersStore } = useSelector(
    (state) => state.DetailsOrdersStore
  );
  const handleClose = () => {
    disPatch(upDetailsOrders(false));
  };
  const handlerDelivered = () => {
    setDeliver("flex!important");
    setDeliverBtn("none!important");
    if (DetailsOrdersStore) {
      axios.put(`http://localhost:8000/orderList/${DetailsOrdersStore.id}`, {
        ...DetailsOrdersStore,
        deliver: "1",
      });
    }
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
            <Box ></Box>
            <Box width="100%">
              {DetailsOrdersStore.deliver === "1" || deliverBtn==="none!important" ? (
                <Alert className="alert-delivered" severity="success">


                  {" "}
                  تحویل داده شد
                </Alert>
              ) : <Box  display={deliverBtn}>
                <Button
               
                  variant="contained"
                  onClick={handlerDelivered}
                  className="deliver-btn"
                  color="success"
                >
                  <Typography className="deliver-btn-font">
                    تحویل داده شد
                  </Typography>
                </Button>
              </Box>
              }
            </Box>
            {DetailsOrdersStore.card.map((item) => (
              <ViewBody item={item} />
            ))}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
