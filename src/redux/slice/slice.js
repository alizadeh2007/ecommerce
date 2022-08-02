import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    closeLogIn: false,
    openModalConditions:false,
    openModalShowMiniPic:false,
    openModalFilterPage:false,
    openModalRegisterPage:false,
    storeInfoJsonServer:[],
    storeInfoPantsJsonServer:[],
    storeInfoShoesJsonServer:[],
    searchEyesGlass:[],
    sortData:"",
    newSort:[],
    openSingleProduct:[],
    openReportModal:false,
    openHereReportModal:false,
    PaymentCMP:[],
    totalPaymentCost:[],
  },
  reducers: {
    changeType: (state,action) => {
      state.closeLogIn =action.payload ;
    },
    changeTypeConditions: (state,action) => {
        state.openModalConditions =action.payload ;
      },
      changeTypeMiniPic: (state,action) => {
        state.openModalShowMiniPic =action.payload ;
      },
      changeTypeFilterPage: (state,action) => {
        state.openModalFilterPage =action.payload ;
      },
      changeTypeRegisterPage: (state,action) => {
        state.openModalRegisterPage =action.payload ;
      },
      storageInformationJson: (state,action) => {
        state.storeInfoJsonServer =action.payload ;
      },
      storageInformationPantsJson: (state,action) => {
        state.storeInfoPantsJsonServer =action.payload ;
      },
      storageInformationShoesJson: (state,action) => {
        state.storeInfoShoesJsonServer =action.payload ;
      },
      uptodateSearchEyesGlass: (state,action) => {
        state.searchEyesGlass =action.payload ;
      },
      uptodateSortData: (state,action) => {
        state.sortData =action.payload ;
      },
      uptodateNewSort: (state,action) => {
        state.newSort =action.payload ;
      },
      uptodateopenSingleProduct: (state,action) => {
        state.openSingleProduct =action.payload ;
      },
      uptodatOpenReportModal: (state,action) => {
        state.openReportModal =action.payload ;
      },
      uptodatOpenHereReportModal: (state,action) => {
        state.openHereReportModal =action.payload ;
      },
      uptodatPaymentCMP: (state,action) => {
        const newItems=action.payload;
        const productIndexFind=state.PaymentCMP.findIndex((p)=>{
          return p.id===newItems.id
        })
        if(productIndexFind>=0){
          const newCounter=state.PaymentCMP[productIndexFind].count+1;
          state.PaymentCMP[productIndexFind].count=newCounter
        }else{
          state.PaymentCMP=[...state.PaymentCMP,{...action.payload,count:1}]
        }
      },
      uptodatTotalPaymentCost: (state,action) => {
        state.totalPaymentCost=action.payload;
      },
  },
});
export const {uptodatTotalPaymentCost,uptodatPaymentCMP,uptodatOpenHereReportModal,uptodatOpenReportModal,uptodateopenSingleProduct, uptodateSearchEyesGlass,uptodateNewSort, uptodateSortData, storageInformationPantsJson,storageInformationShoesJson, changeType,changeTypeMiniPic, changeTypeConditions,changeTypeFilterPage,changeTypeRegisterPage,storageInformationJson } = counterSlice.actions;
export default counterSlice.reducer;
