import { configureStore } from '@reduxjs/toolkit'
import closeLogIn  from './../slice/slice';
import openModalConditions  from './../slice/slice';

export const store = configureStore({
  reducer: {
    closeLogIn,
    openModalConditions
  },
})
