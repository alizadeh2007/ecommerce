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
import ModalView from "./../slice/slice";
import jsonData from "./../slice/slice";
import jsonDataPants from "./../slice/slice";
import jsonDataShirts from "./../slice/slice";
import viewCard from "./../slice/slice";
import editCard from "./../slice/slice";
import ModalEdit from "./../slice/slice";
import DeleteModalIcon from "./../slice/slice";
import AddProductCMD from "./../slice/slice";
import LogInType from "./../slice/slice";
import LogInSave from "./../slice/slice";
import Email from "./../slice/slice";
import Password from "./../slice/slice";
import SelectProduct from "./../slice/slice";
import SelectMath from "./../slice/slice";
import AddCardName from "./../slice/slice";
import AddCardPrice from "./../slice/slice";
import DemoCMD from "./../slice/slice";
import UploadPic from "./../slice/slice";
import DemeoPic from "./../slice/slice";
import DemeoTitle from "./../slice/slice";
import DemeoPrice from "./../slice/slice";
import DeleteIconBtn from "./../slice/slice";
import EditData from "./../slice/slice";
import OrderAdmin from "./../slice/slice";
import DetailsOrders from "./../slice/slice";
import DetailsOrdersStore from "./../slice/slice";
import SelectOp from "./../slice/slice";
import storeOrderAdmin from "./../slice/slice";
//storeOrderAdmin
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
    AllOrders,
    ModalView,
    jsonData,
    jsonDataPants,
    jsonDataShirts,
    viewCard,
    editCard,
    ModalEdit,
    DeleteModalIcon,
    AddProductCMD,
    LogInType,
    LogInSave,
    Email,
    Password,
    SelectProduct,
    SelectMath,
    AddCardName,
    AddCardPrice,
    DemoCMD,
    UploadPic,
    DemeoPic,
    DemeoTitle,
    DemeoPrice,
    DeleteIconBtn,
    EditData,
    OrderAdmin,
    DetailsOrders,
    DetailsOrdersStore,
    SelectOp,
    storeOrderAdmin,
  },
});
