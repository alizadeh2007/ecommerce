import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { upToDateChangeIcon, upToDateChangePersonIcn, upToDateCloseModalPersonIcon } from "../../../../../redux/slice/slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  display:"flex",
  flexDirection: "column",
alignItems: "center",
gap: "2rem",
  p: 4,
};

export default function CloseModalChangeIcon() {
    const navigate=useNavigate()
    const disPatch = useDispatch();
  const { closeModalPersonIcon } = useSelector(
    (state) => state.closeModalPersonIcon
  );

  const handleClos = () =>{
    localStorage.clear("token")
    disPatch(upToDateChangeIcon("flex!important"));
    disPatch(upToDateChangePersonIcn("none!important"))
    disPatch(upToDateCloseModalPersonIcon(false))
    navigate("/");

  }
  const handleCancel=()=>{
    disPatch(upToDateCloseModalPersonIcon(false))

  }

  return (
    <Box >
      <Modal
        open={closeModalPersonIcon}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2" fontSize="1.9rem!important">
            خروج می کنید؟{" "}
          </Typography>
          <Box display="flex" gap="1rem">
            <Button onClick={handleCancel} variant="outlined" color="error">
            <Typography fontSize="1.9rem!important">

            خیر
            </Typography>
            
            </Button>
            <Button onClick={handleClos} variant="outlined" color="success">
            <Typography fontSize="1.9rem!important">

بله
</Typography>
            </Button>
            
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
