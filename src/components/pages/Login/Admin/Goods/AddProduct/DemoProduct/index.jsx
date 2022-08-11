import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";
import { upAddCardName, upAddCardPrice, upDemeoPic, upDemeoPrice, upDemeoTitle, upDemoCMD, upUploadPic } from "../../../../../../../redux/slice/slice";
import { useDispatch } from "react-redux";
import './Demo.Module.css'
import { useEffect } from "react";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

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

export default function DemoProduct() {
  const disPatch = useDispatch();
  const {UploadPic}=useSelector(state=>state.UploadPic)
  const { DemoCMD } = useSelector((state) => state.DemoCMD);
  const { AddCardName } = useSelector((state) => state.AddCardName);
  const { AddCardPrice } = useSelector((state) => state.AddCardPrice);
  const { DemeoPrice } = useSelector((state) => state.DemeoPrice);
  const { DemeoTitle } = useSelector((state) => state.DemeoTitle);
  const { DemeoPic } = useSelector((state) => state.DemeoPic);

  //upDemeoPrice,upDemeoTitle,upDemeoPic
  const handleClose = () => {
    disPatch(upDemoCMD(false));
  };

  return (
    <div>
      <Modal
        open={DemoCMD}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="Demo-modal"
      >
        <Box sx={style}>
        <Box display="flex" justifyContent="center">
        {UploadPic? 
          <img className="Demeo-img"  src={UploadPic} />:
          <Box className="photo-Demeo-Empty">
            <InsertPhotoIcon className="photo-Demeo-Empty-icon"/>
          </Box>
        }
        </Box>
          <Box display="flex" marginTop="2rem" className="Demo-title" justifyContent="center">
          {
            DemeoTitle?
            <Typography className="Demo-title">
             {DemeoTitle} 
          </Typography>:
          <Typography className="Demo-title">
عنوان محصول وارد نشده است
          </Typography>
          }
          </Box>
          <Box display="flex" width="100%" justifyContent="center" gap="1rem">
          {DemeoPrice?
          <Typography className="priceStyle">تومان</Typography>:<Typography className="priceStyle">اطلاعات قیمت وارد نشده است</Typography>
          }
          <Typography className="priceStyle" >
             {DemeoPrice} 
          </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
