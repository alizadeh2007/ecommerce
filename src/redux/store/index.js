import { configureStore } from "@reduxjs/toolkit";
import closeLogIn from "./../slice/slice";
import openModalConditions from "./../slice/slice";
import openModalShowMiniPic from "./../slice/slice";
import openModalFilterPage from "./../slice/slice";
import openModalRegisterPage from "./../slice/slice";
import storeInfoJsonServer from "./../slice/slice";

export const store = configureStore({
  reducer: {
    closeLogIn,
    openModalConditions,
    openModalShowMiniPic,
    openModalFilterPage,
    openModalRegisterPage,
    storeInfoJsonServer,
  },
});
