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
  },
});
export const { changeType,changeTypeMiniPic, changeTypeConditions,changeTypeFilterPage,changeTypeRegisterPage,storageInformationJson } = counterSlice.actions;
export default counterSlice.reducer;
