import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Alert, Checkbox } from "@mui/material";
import "./register.Module.css";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { useSelector, useDispatch } from "react-redux";
import {
  changeType,
  changeTypeConditions,
  changeTypeRegisterPage,
  upToDateUsersSource,
} from "../../../../redux/slice/slice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

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
export default function RegisterModal() {
  const navigate = useNavigate();
  const disPatch = useDispatch();
  const [alertRegister, setAlertRegister] = useState("none!important");
  const [email, setEmail] = useState("");
  const [passwerd, setPasswerd] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errorPassword, setErrorPassword] = useState("none!important");
  const [errorPasswordEmpty, setErrorPasswordEmpty] =
    useState("none!important");

  //errorPasswordEmpty
  const closeSuccess = function () {
    setAlertRegister("none!important");
  };
  const handlerRegisterButton = function () {
    if (email.length > 2 && passwerd.length > 2 && passwerd === confirmPass) {
      setErrorPassword("none!important");
      setErrorPasswordEmpty("none!important");
      axios.post("http://localhost:8000/users", {
        id: Date.now(),
        email: email,
        passwerd: passwerd,
      });
      disPatch(
        upToDateUsersSource({
          id: Date.now(),
          email: email,
          passwerd: passwerd,
        })
      );
      disPatch(changeType(false));
      disPatch(changeTypeRegisterPage(false));
      setAlertRegister("flex!important");
      navigate("/SuccessfulRigester");
    } else if (passwerd !== confirmPass) {
      setErrorPassword("flex!important");
      setErrorPasswordEmpty("none!important");
    } else if (passwerd.length < 2) {
      setErrorPasswordEmpty("flex!important");
      setErrorPassword("none!important");
    }


    

  };
  const { openModalRegisterPage } = useSelector(
    (state) => state.openModalRegisterPage
  );
  const conditionButton = function () {
    disPatch(changeTypeConditions(true));
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const handleClose = function () {
    disPatch(changeType(false));
    disPatch(changeTypeRegisterPage(false));
    setErrorPassword("none!important");
    setErrorPasswordEmpty("none!important");
  };

  return (
    <Box>
      <Modal
        open={openModalRegisterPage}
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
            ثبت نام
          </Typography>
          <Box display="flex" padding="1rem" flexDirection="column" gap="2rem">
            <Box>
              <Typography className="Register-email-title">
                آدرس ایمیل <span className="Register-stares">*</span>
              </Typography>

              <Box className="Register-email-input-Box">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="Register-email-input"
                  placeholder="ایمیل یا شماره تماس"
                />
              </Box>
            </Box>

            <Box>
              <Typography className="Register-email-title">
                رمز <span className="Register-stares">*</span>
              </Typography>

              <Box
                className="Register-email-input-Box"
                display="flex"
                justifyContent="center"
              >
                <input
                  type="password"
                  onChange={(e) => setPasswerd(e.target.value)}
                  className="Register-email-input"
                  placeholder="رمز عبور"
                />
              </Box>
            </Box>
            <Box display={errorPasswordEmpty}>
              <Typography className="passError">
                رمز شما باید بیشتر از 5 کاراکتر باشد{" "}
              </Typography>
            </Box>
            <Box>
              <Typography className="Register-email-title">
                تکرار رمز <span className="Register-stares">*</span>
              </Typography>
              <Box
                className="Register-email-input-Box"
                display="flex"
                justifyContent="center"
              >
                <input
                  type="password"
                  onChange={(e) => setConfirmPass(e.target.value)}
                  className="Register-email-input"
                  placeholder="تکرار رمز عبور"
                />
              </Box>
            </Box>

            <Box display={errorPassword}>
              <Typography className="passError">
                رمز عبور تطابق ندارد
              </Typography>
            </Box>
            <Box display="flex" justifyContent="flex-end" gap=".3rem">
              <Typography className="fontLoginStyles">
                را مطالعه کرده ام و می‌پذیرم
              </Typography>
              <Typography
                onClick={conditionButton}
                className="fontLoginStyles fontLoginStylesadd"
              >
                شرایط عضویت
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
                onClick={handlerRegisterButton}
                className="register-button-Styles"
                variant="contained"
              >
                ثبت نام{" "}
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
