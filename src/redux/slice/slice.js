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
  },
});
export const {uptodateSearchEyesGlass,uptodateNewSort, uptodateSortData, storageInformationPantsJson,storageInformationShoesJson, changeType,changeTypeMiniPic, changeTypeConditions,changeTypeFilterPage,changeTypeRegisterPage,storageInformationJson } = counterSlice.actions;
export default counterSlice.reducer;
