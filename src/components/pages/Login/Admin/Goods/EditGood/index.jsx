import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./editGood.Module.css";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { upEditData, upModalEdit, upModalView } from "../../../../../../redux/slice/slice";
import { Button } from "@mui/material";
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

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

export default function OpenEditProduct() {
  const disPatch = useDispatch();
  const { ModalEdit } = useSelector((state) => state.ModalEdit);
  const { editCard } = useSelector((state) => state.editCard);
  const [open, setOpen] = React.useState(false);
  const [inputEditTitle,setInputEditTitle]=useState()
  const [inputEditPrice,setInputEditPrice]=useState()
  const [inputEditExplain,setInputEditExplain]=useState()
  const [inputEditNumber,setInputEditNumber]=useState()
  //setInputEditNumber
  const [name,setName]=useState()
  const handleClose = () => {
    disPatch(upModalEdit(false));
  };
  const EditBTN=()=>{

    if(editCard.category==="eyeglasses"){
      axios
        .put(`http://localhost:8000/eyeglasses/${editCard.id}`,{
  ...editCard,
  "title":inputEditTitle?inputEditTitle:editCard.title,
  "price":inputEditPrice?inputEditPrice:editCard.price,
  "explain":inputEditExplain?inputEditExplain:editCard.explain,
  "number":inputEditNumber?inputEditNumber:editCard.number,
        })
        disPatch(upModalEdit(false))
      }else if(editCard.category==="shirts"){
        axios
          .put(`http://localhost:8000/shirts/${editCard.id}`,{
    ...editCard,
    "title":inputEditTitle?inputEditTitle:editCard.title,
    "price":inputEditPrice?inputEditPrice:editCard.price,
    "explain":inputEditExplain?inputEditExplain:editCard.explain,
    "number":inputEditNumber?inputEditNumber:editCard.number,
          })
          disPatch(upModalEdit(false))
        }else if(editCard.category==="pants"){
          axios
            .put(`http://localhost:8000/pants/${editCard.id}`,{
      ...editCard,
      "title":inputEditTitle?inputEditTitle:editCard.title,
      "price":inputEditPrice?inputEditPrice:editCard.price,
      "explain":inputEditExplain?inputEditExplain:editCard.explain,
      "number":inputEditNumber?inputEditNumber:editCard.number,
            })
            disPatch(upModalEdit(false))
          }
  }

  return (
    <Box>
      <Modal
        open={ModalEdit}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img width="100%" src={editCard.imgURL} />
          <Typography
            className="modalEye-title"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            <input onChange={(e)=>setInputEditTitle(e.target.value)} className="edit-input-title" placeholder={editCard.title} />
          </Typography>
          {/* price section */}
          <Box className="detail-eyeModal">
            <Box className="detail-eyeModal-row">
              <Box>
                <Typography
                  className="ModalView-price-store-title"
                  display="flex"
                  justifyContent="flex-end"
                  gap="1rem"
                >
                  <Typography className="ModalView-price-store-title">
                    تومان
                  </Typography>
                  <input
                    type="number"
                    className="edit-input"
                    onChange={(e)=>setInputEditPrice(e.target.value)}
                    placeholder={editCard.price}
                  />
                </Typography>
              </Box>
            </Box>
            <Box className="detail-eyeModal-row">
              <Typography className="ModalView-price-store-title">
                :قیمت کالا
              </Typography>
            </Box>
          </Box>

          {/* the Number of Goods section */}
          <Box className="detail-eyeModal">
            <Box className="detail-eyeModal-row" display="flex" gap="1rem">
              <Typography
                className="ModalView-price-store-title"
                display="flex"
                justifyContent="flex-end"
                gap="1rem"
              >
                <Typography className="ModalView-price-store-title">
                  عدد
                </Typography>
                <input
                  type="number"
                  onChange={(e)=>setInputEditNumber(e.target.value)}
                  className="edit-input"
                  placeholder={editCard.number}
                />
              </Typography>
            </Box>
            <Box className="detail-eyeModal-row">
              <Typography className="ModalView-price-store-title">
                :تعداد کالا
              </Typography>
            </Box>
          </Box>
          <Box className="description-modalEye" sx={{ mt: 2 }}>
            <textarea
            onChange={(e)=>setInputEditExplain(e.target.value)}
              className="description-modalEye-textarea"
              placeholder={editCard.explain}
            />
          </Box>
          <Box display="flex" justifyContent="center">
            <Button
              onClick={EditBTN}
              variant="outlined"
              className="Closa-eyeModal"
            >
              اصلاح{" "}
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
