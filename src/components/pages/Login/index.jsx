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

export default function BasicModal() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState();
  const [logInType, setLogInType] = useState("none!important");
  const navigate = useNavigate();
  const loginFn = function () {
    if (email && password) {
      // setUser(item.filter(user=>user.email===email && user.password===password))
      axios
        .get("http://localhost:8000/users")
        .then((res) =>
          setUser(
            res.data.filter(
              (item) => item.email === email && item.passwerd == password
            )
          )
        );
      if (user.length > 0) {
        localStorage.setItem("token", `${user[0].id}`);
        navigate("/Dashboard");
        disPatch(changeType(false));
      } else if (user.length === 0) {
        setLogInType("flex!important");
      }
    }
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
              برای ورود، ایمیل و رمز خود را وارد کنید
            </Typography>
            <Box
              className="inputLoginStylesParent"
              display="flex"
              justifyContent="center"
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="inputLoginStyles"
                placeholder="ایمیل"
              />
            </Box>
            <Box
              className="inputLoginStylesParent"
              display="flex"
              justifyContent="center"
            >
              <input
                type="password"
                className="inputLoginStyles"
                placeholder=" رمز عبور  "
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <Box display={logInType} justifyContent="flex-end">
              <Typography className="errorLogIn">
                ایمیل یا رمز ورود اشتباست
              </Typography>
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
              <Box
                className="register-BTN"
                variant="contained"
                onClick={registerFn}
              >
                ثبت حساب کاربری{" "}
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
