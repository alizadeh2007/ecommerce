import { configureStore } from "@reduxjs/toolkit";
import closeLogIn from "./../slice/slice";
import openModalConditions from "./../slice/slice";
import openModalShowMiniPic from "./../slice/slice";
import openModalFilterPage from "./../slice/slice";
import openModalRegisterPage from "./../slice/slice";
import storeInfoJsonServer from "./../slice/slice";
import storeInfoPantsJsonServer from "./../slice/slice";
import storeInfoShoesJsonServer from "./../slice/slice";
import searchEyesGlass from "./../slice/slice";
import sortData from "./../slice/slice";
import newSort from "./../slice/slice";
import openSingleProduct from "./../slice/slice";
import openReportModal from "./../slice/slice";
import openHereReportModal from "./../slice/slice";
import PaymentCMP from "./../slice/slice";
import totalPaymentCost from "./../slice/slice";
import raitingStore from "./../slice/slice";
import usersSource from "./../slice/slice";
import totalCost from "./../slice/slice";
import changeIcon from "./../slice/slice";
import changePersonIcn from "./../slice/slice";
import closeModalPersonIcon from "./../slice/slice";
import dashbourdType from "./../slice/slice";
import AllGoodsType from "./../slice/slice";
import AllStore from "./../slice/slice";
import AllGoods from "./../slice/slice";
import AllOrders from "./../slice/slice";
// AllOrders
export const store = configureStore({
  reducer: {
    closeLogIn,
    openModalConditions,
    openModalShowMiniPic,
    openModalFilterPage,
    openModalRegisterPage,
    storeInfoJsonServer,
    storeInfoPantsJsonServer,
    storeInfoShoesJsonServer,
    searchEyesGlass,
    sortData,
    newSort,
    openSingleProduct,
    openReportModal,
    openHereReportModal,
    PaymentCMP,
    totalPaymentCost,
    raitingStore,
    usersSource,
    totalCost,
    changeIcon,
    changePersonIcn,
    closeModalPersonIcon,
    dashbourdType,
    AllGoodsType,
    AllStore,
    AllGoods,
    AllOrders
  },
});
