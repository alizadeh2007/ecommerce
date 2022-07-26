import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Checkbox } from "@mui/material";
import "./login.style.css";
import { useSelector, useDispatch } from "react-redux";
import {
  changeType,
  changeTypeConditions,
  changeTypeRegisterPage,
} from "../../../redux/slice/slice";
import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const navigate = useNavigate();

  const loginFn = function () {
    navigate("/Dashboard");
    disPatch(changeType(false));
  };
  const registerFn = function () {
    disPatch(changeTypeRegisterPage(true));
    disPatch(changeType(false));
  };

  const conditionButton = function () {
    disPatch(changeTypeConditions(true));
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const disPatch = useDispatch();
  const handleClose = function () {
    disPatch(changeType(false));
  };

  const { closeLogIn } = useSelector((state) => state.closeLogIn);
  return (
    <div>
      <Modal
        open={closeLogIn}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="login" sx={style}>
          <CloseIcon onClick={handleClose} className="closeIcon"></CloseIcon>
          <Typography
            className="loginRegesterFont"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            ورود/ثبت نام
          </Typography>
          <Box display="flex" padding="1rem" flexDirection="column" gap="2rem">
            <Typography className="fontLoginStyles">
              برای ورود، شماره موبایل یا ایمیل خود را وارد کنید
            </Typography>
            <Box
              className="inputLoginStylesParent"
              display="flex"
              justifyContent="center"
            >
              <input
                className="inputLoginStyles"
                placeholder="ایمیل یا شماره تماس"
              />
            </Box>
            <Box display="flex" justifyContent="flex-end" gap=".3rem">
              <Typography className="fontLoginStyles">
                من را به خاطر بسپار{" "}
              </Typography>

              <Checkbox {...label} defaultChecked color="default" />
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              gap="1rem"
            >
              <Button
                className="loginbuttonStyles"
                variant="contained"
                onClick={loginFn}
              >
                ورود{" "}
              </Button>
              <Button
                className="register-button-Styles"
                variant="contained"
                onClick={registerFn}
              >
                ثبت نام{" "}
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
