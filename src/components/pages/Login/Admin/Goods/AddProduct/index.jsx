import "./addProduct.Moduct.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  upAddCardName,
  upAddCardPrice,
  upAddProductCMD,
  upDemeoPic,
  upDemeoPrice,
  upDemeoTitle,
  upDemoCMD,
  upUploadPic,
} from "../../../../../../redux/slice/slice";
import UploadButtons from "./uploadPic/index";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SendIcon from "@mui/icons-material/Send";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import DemoProduct from "./DemoProduct/index";
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 800,
  overflow: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddProduct() {
  const disPatch = useDispatch();
  const [getProductName, setGetProductName] = useState("");
  const [getProductPrice, setGetProductPrice] = useState("");
  const [getProductNum, setGetProductNum] = useState("");
  const [NamEror, setNamEror] = useState("none!important");
  const [GetProductType, setGetProductType] = useState();
  const [GetProductLink, setGetProductLink] = useState("");
  const { DemeoPic } = useSelector((state) => state.DemeoPic);
  const [GetProductRate, setGetProductRate] = useState();
  const [PriceEror, setPriceEror] = useState("none!important");
  const [GetData, setGetData] = useState();
  const { UploadPic } = useSelector((state) => state.UploadPic);
  const { jsonData } = useSelector((state) => state.jsonData);
  const { AddProductCMD } = useSelector((state) => state.AddProductCMD);
  const { AddCardName } = useSelector((state) => state.AddCardName);
  const { AddCardPrice } = useSelector((state) => state.AddCardPrice);
  const [open, setOpen] = React.useState(false);
  const [handelSelectOption,setHandelSelectOption]=useState("eye")
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    disPatch(upAddProductCMD(false));
  };
  const sendData = () => {
    if (getProductName === "" && getProductPrice === "") {
      setNamEror("flex");
      setPriceEror("flex");
    } else if (getProductName === "") {
      setNamEror("flex");
      setPriceEror("none");
    } else if (getProductPrice === "") {
      setPriceEror("flex");
      setNamEror("none");
    } else {
      disPatch(upDemoCMD(true));
      disPatch(upAddProductCMD(false));
      setNamEror("none");
      setPriceEror("none");
      setGetProductPrice("");
      setGetProductName("");
      if(handelSelectOption==="eye"){
        axios.post(`http://localhost:8000/eyeglasses/`, {
  "id":`${Date.now()}`,
  "title":AddCardName,
  "category": "eyeglasses",
  "price":AddCardPrice,
  "imgURL":GetProductLink,
  "categories":GetProductType,
  "number": getProductNum,
  "star": GetProductRate,
  "count": "0",
  "comments": [],
  "material": " پلاستیکی",
  "guarantee": "16 ماه گارانتی",
  "explain":GetData
  })
      }else if(handelSelectOption==="pants"){
        axios.post(`http://localhost:8000/pants/`, {
          "id":`${Date.now()}`,
          "title":AddCardName,
          "category": "pants",
          "price":AddCardPrice,
          "imgURL":GetProductLink,
          "categories":GetProductType,
          "number": getProductNum,
          "star": GetProductRate,
          "count": "0",
          "comments": [],
          "material": " پلاستیکی",
          "guarantee": "16 ماه گارانتی",
          "explain":GetData
          })
      }else if(handelSelectOption==="shirt"){
        axios.post(`http://localhost:8000/shirts/`, {
          "id":`${Date.now()}`,
          "title":AddCardName,
          "category": "shirts",
          "price":AddCardPrice,
          "imgURL":GetProductLink,
          "categories":GetProductType,
          "number": getProductNum,
          "star": GetProductRate,
          "count": "0",
          "comments": [],
          "material": " پلاستیکی",
          "guarantee": "16 ماه گارانتی",
          "explain":GetData
          })
      }
    
    
      
    }
  };
  const openDemo = ()=>{
    disPatch(upDemoCMD(true));
    disPatch(upDemeoPrice(AddCardPrice))
    disPatch(upDemeoTitle(AddCardName))
    disPatch(upUploadPic(GetProductLink))
  }

  return (
    <div>
      <Modal
        open={AddProductCMD}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className="addProduct-closeIcon">
            <HighlightOffIcon className="close-Icon" onClick={handleClose} />
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="Add-title"
            >
              افزودن کالا{" "}
            </Typography>
          </Box>
          <Box className="product-Name-title-pic">
            {/* <Typography className="product-Name-title" marginTop="3rem">
              {" "}
              بارگزاری تصویر :
            </Typography> */}
            {/* <Box
              className="product-upload-section"
              display="flex"
              justifyContent="center"
            > */}
              {/* <UploadButtons /> */}
            {/* </Box> */}
            <Box className="product-Name">
              <Typography className="product-Name-title">لینک تصویر:</Typography>
              <Box position="relative">
                <input
                  onChange={(e) => {
                    setGetProductLink(e.target.value);
                  }}
                  className="product-Name-input"
                />
                <Typography display={NamEror} className="name-empty">
                  فیلد نمی تواند خالی باشد
                </Typography>
              </Box>
            </Box>
            <Box className="product-Name">
              <Typography className="product-Name-title">نام کالا:</Typography>
              <Box position="relative">
                <input
                  onChange={(e) => {
                    disPatch(upAddCardName(e.target.value));
                    setGetProductName(e.target.value);
                  }}
                  className="product-Name-input"
                />
                <Typography display={NamEror} className="name-empty">
                  فیلد نمی تواند خالی باشد
                </Typography>
              </Box>
            </Box>
            <Box className="product-Name">
              <Typography className="product-Name-title">امتیاز اولیه:</Typography>
              <Box position="relative">
                <input
                type="number"
                min="0"
                max="5"
                  onChange={(e) => {
                    setGetProductRate(e.target.value);
                  }}
                  className="product-Name-input"
                />
                <Typography display={NamEror} className="name-empty">
                  فیلد نمی تواند خالی باشد
                </Typography>
              </Box>
            </Box>
            <Box className="product-Name">
              <Typography className="product-Name-title">مدل:</Typography>
              <Box position="relative">
                <input
                  onChange={(e) => {
                    setGetProductType(e.target.value);
                  }}
                  className="product-Name-input"
                />
              </Box>
            </Box>
            <Box className="product-Name">
              <Typography className="product-Name-title">تعداد:</Typography>
              <input
                className="product-Name-input"
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                onChange={(e) => setGetProductNum(e.target.value)}
              />
            </Box>
            <Box className="product-Name">
              <Typography className="product-Name-title">
                قیمت(تومان):
              </Typography>
              <Box position="relative">
                <input
                  onChange={(e) => {
                    disPatch(upAddCardPrice(e.target.value));
                    setGetProductPrice(e.target.value);
                  }}
                  type="number"
                  min="10000"
                  className="product-Name-input"
                />
                <Typography display={PriceEror} className="name-empty">
                  فیلد نمی تواند خالی باشد
                </Typography>
              </Box>
            </Box>
            <Box className="product-Name">
              <Typography className="product-Name-title">
                {" "}
                دسته بندی:
              </Typography>
              <select onChange={(e)=>setHandelSelectOption(e.target.value)} className="product-Name-input">
                <option value="eye">عینک</option>
                <option value="pants">شلوار</option>
                <option value="shirt">پیراهن</option>
              </select>
            </Box>
            <Box className="product-Name" marginTop="5rem">
              <div className="App explain">



<textarea
className="textarea-style"
placeholder="توضیحات کالا"
                  onChange={(e) => {
                    setGetData(e.target.value)
                  }}
></textarea>
              </div>
            </Box>
            <Box display="flex" justifyContent="center" marginTop="3rem" gap="1rem">
              <Button
                variant="contained"
                color="success"
                endIcon={<VisibilityIcon />}
                onClick={openDemo}
              >
                <Typography className="send-icon">دمو</Typography>
              </Button>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={sendData}
              >
                <Typography className="send-icon">ارسال</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
