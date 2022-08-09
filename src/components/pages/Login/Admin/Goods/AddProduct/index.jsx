import "./addProduct.Moduct.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { upAddProductCMD } from "../../../../../../redux/slice/slice";
import UploadButtons from "./uploadPic/index";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SendIcon from "@mui/icons-material/Send";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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

export default function AddProduct() {
  const disPatch = useDispatch();
  const { AddProductCMD } = useSelector((state) => state.AddProductCMD);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    disPatch(upAddProductCMD(false));
  };

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
            <HighlightOffIcon className="close-Icon" />
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="Add-title"
            >
              افزودن کالا{" "}
            </Typography>
          </Box>
          <Typography className="product-Name-title" position="relative!important" marginTop="3rem">
            {" "}
            بارگزاری تصویر :
          </Typography>
          <Box
            className="product-upload-section"
            display="flex"
            justifyContent="center"
          >
            <UploadButtons />
          </Box>
          <Box className="product-Name">
            <Typography className="product-Name-title">نام کالا:</Typography>
            <input className="product-Name-input" />
          </Box>
          <Box className="product-Name">
            <Typography className="product-Name-title">تعداد:</Typography>
            <input
              className="product-Name-input"
              type="number"
              id="quantity"
              name="quantity"
              min="1"
            />
          </Box>
          <Box className="product-Name">
            <Typography className="product-Name-title"> دسته بندی:</Typography>
            <select className="product-Name-input">
              <option value="eye">عینک</option>
              <option value="pants">شلوار</option>
              <option value="shirt">پیراهن</option>
            </select>
          </Box>
          <Box className="product-Name" marginTop="5rem">
            <div className="App explain">
              <CKEditor
                className="explain"
                editor={ClassicEditor}
                data="<p>توضیحات محصول</p>"
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
            </div>
          </Box>
          <Box display="flex" justifyContent="center" marginTop="3rem">
          <Button variant="contained" endIcon={<SendIcon />}>
            <Typography className="send-icon">ارسال</Typography>
          </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}