import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    closeLogIn: false,
    openModalConditions:false,
  },
  reducers: {
    changeType: (state,action) => {
      state.closeLogIn =action.payload ;
    },
    changeTypeConditions: (state,action) => {
        state.openModalConditions =action.payload ;
      },
  },
});
export const { changeType, changeTypeConditions } = counterSlice.actions;
export default counterSlice.reducer;
