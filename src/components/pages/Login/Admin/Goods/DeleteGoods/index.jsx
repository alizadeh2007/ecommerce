import "./deleteGoods.Module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from 'react-redux';
import { upDeleteModalIcon } from "../../../../../../redux/slice/slice";
import { useDispatch } from 'react-redux';
import axios from 'axios';

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

export default function DeleteModal() {
    const {DeleteModalIcon}=useSelector(state=>state.DeleteModalIcon);
    const {DeleteIconBtn}=useSelector(state=>state.DeleteIconBtn)
    const disPatch=useDispatch()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () =>{
    disPatch(upDeleteModalIcon(false))
  };
const handleDelete=()=>{
  if(DeleteIconBtn.category==="eyeglasses"){
    axios.delete(`http://localhost:8000/eyeglasses/${DeleteIconBtn.id}`)
    disPatch(upDeleteModalIcon(false))
    

  }
}

  return (
    <div>
      <Modal
        open={DeleteModalIcon}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            className="delete-title"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            آیا از حذف محصول مطمئن هستید؟{" "}
          </Typography>

          <Typography
            display="flex"
            justifyContent="center"
            gap="1rem"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            <Button  variant="outlined">
              <Typography className="Cancel-BTN" onClick={handleClose}>منصرف شدم</Typography>
            </Button>
            <Button
             onClick={handleDelete}
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon className="DeleteIcon" />}
            >
              <Typography className="Cancel-BTN">حذف</Typography>
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
