import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./viewProduct.Module.css";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { upModalView } from "../../../../../../redux/slice/slice";
import pic from "./../../../../../../assets/pic/deliver3.svg";
import { Button } from "@mui/material";

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

export default function OpenViewProduct() {
  const disPatch = useDispatch();
  const { ModalView } = useSelector((state) => state.ModalView);
  const { viewCard } = useSelector((state) => state.viewCard);
  //upviewCard
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    disPatch(upModalView(false));
  };

  return (
    <Box>
      <Modal
        open={ModalView}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img width="100%" src={viewCard.imgURL} />
          <Typography
            className="modalEye-title"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            {viewCard.title}
          </Typography>
          {/* price section */}
          <Box className="detail-eyeModal">
            <Box className="detail-eyeModal-row">
              <Box display="flex" gap=".4rem">
                <Typography className="ModalView-price-store-title">
                  {" "}
                  تومان
                </Typography>
                <Typography className="ModalView-price-store-title">
                  {" "}
                  {viewCard.price}
                </Typography>
              </Box>
            </Box>
            <Box className="detail-eyeModal-row">
              <Typography className="ModalView-price-store-title">
                :قیمت کالا
              </Typography>
            </Box>
          </Box>
          {/* rating section */}
          <Box className="detail-eyeModal">
            <Box className="detail-eyeModal-row">
              <Typography className="ModalView-price-store-title">
                {" "}
                {viewCard.star}
              </Typography>
            </Box>
            <Box className="detail-eyeModal-row">
              <Typography className="ModalView-price-store-title">
                :امتیاز کالا
              </Typography>
            </Box>
          </Box>
          {/* the Number of Goods section */}
          <Box className="detail-eyeModal">
            <Box className="detail-eyeModal-row">
              <Typography className="ModalView-price-store-title">
                {" "}
                {viewCard.number}
              </Typography>
            </Box>
            <Box className="detail-eyeModal-row">
              <Typography className="ModalView-price-store-title">
                :تعداد کالا
              </Typography>
            </Box>
          </Box>
          <Typography
            className="description-modalEye"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            {viewCard.explain}
          </Typography>
          <Box display="flex" justifyContent="center">
            <Button
              onClick={handleClose}
              variant="outlined"
              className="Closa-eyeModal"
            >
              بستن
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
