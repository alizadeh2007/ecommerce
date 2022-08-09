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
    raitingStore:"",
    usersSource:[],
    totalCost:"",
    changeIcon:"flex",
    changePersonIcn:"none",
    closeModalPersonIcon:false,
    dashbourdType:true,
    AllGoodsType:true,
    AllGoods:true,
    AllStore:true,
    AllOrders:true,
    ModalView:false,
    ModalEdit:false,
    jsonData:[],
    jsonDataPants:[],
    jsonDataShirts:[],
    viewCard:[],
    editCard:[],
    DeleteModalIcon:false,
    AddProductCMD:false,
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
      uptodatRaitingStore: (state,action) => {
        state.raitingStore =action.payload ;
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
        const newMinusBtn=action.payload;
        const productMinusIndexFind=state.PaymentCMP.findIndex((p)=>{
          return p.id===newMinusBtn.id
        }
          )
          const newMinusCounter=state.PaymentCMP[productMinusIndexFind].count-1;
          if(newMinusCounter===0){
            state.PaymentCMP.splice(productMinusIndexFind,1)
          }else{
            state.PaymentCMP[productMinusIndexFind].count=newMinusCounter
          }
      },
      upToDateUsersSource: (state,action) => {
        state.usersSource =[...state.usersSource,{...action.payload}] ;
      },
      upToDateTotalCost: (state,action) => {
        state.totalCost =action.payload ;
      },
      upToDateChangeIcon: (state,action) => {
        state.changeIcon =action.payload ;
      },
      upToDateChangePersonIcn: (state,action) => {
        state.changePersonIcn =action.payload ;
      },
      upToDateCloseModalPersonIcon: (state,action) => {
        state.closeModalPersonIcon =action.payload ;
      },
      upToDateDashbourdType: (state,action) => {
        state.dashbourdType =action.payload ;
      },
      upToDateAllGoodsType: (state,action) => {
        state.AllGoodsType =action.payload ;
      },
      upAllStore: (state,action) => {
        state.AllStore =action.payload ;
      },
      upAllGoods: (state,action) => {
        state.AllGoods =action.payload ;
      },
      upAllOrders: (state,action) => {
        state.AllOrders =action.payload ;
      },
      upModalView: (state,action) => {
        state.ModalView =action.payload ;
      },
      upjsonData: (state,action) => {
        state.jsonData =action.payload ;
      },
      upjsonDataPants: (state,action) => {
        state.jsonDataPants =action.payload ;
      },
      upjsonDataShirts: (state,action) => {
        state.jsonDataShirts =action.payload ;
      },
      upviewCard: (state,action) => {
        state.viewCard =action.payload ;
      },
      upeditCard: (state,action) => {
        state.editCard =action.payload ;
      },
      upModalEdit: (state,action) => {
        state.ModalEdit =action.payload ;
      },
      upDeleteModalIcon: (state,action) => {
        state.DeleteModalIcon =action.payload ;
      },
      upAddProductCMD: (state,action) => {
        state.AddProductCMD =action.payload ;
      },

  },
});
export const {upAddProductCMD,upDeleteModalIcon,upModalEdit,upeditCard,upviewCard,upjsonDataShirts,upjsonDataPants,upjsonData,upModalView,upAllOrders,upAllGoods,upAllStore,upToDateAllGoodsType,upToDateDashbourdType,upToDateCloseModalPersonIcon,upToDateChangePersonIcn,upToDateChangeIcon,upToDateTotalCost,upToDateUsersSource,uptodatRaitingStore,uptodatTotalPaymentCost,uptodatPaymentCMP,uptodatOpenHereReportModal,uptodatOpenReportModal,uptodateopenSingleProduct, uptodateSearchEyesGlass,uptodateNewSort, uptodateSortData, storageInformationPantsJson,storageInformationShoesJson, changeType,changeTypeMiniPic, changeTypeConditions,changeTypeFilterPage,changeTypeRegisterPage,storageInformationJson } = counterSlice.actions;
export default counterSlice.reducer;
