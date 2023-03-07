import { configureStore } from '@reduxjs/toolkit';
import dishes from './dishesSlice';
import cart from './cartSlice';


/* 7 step - import from redux-toolkit wedsite; copy and paste and change the code how you need
 export const store = configureStore({
  reducer:{
    counter: counterReducer
  }
 })  - WHAT WE COPYIED FROM THE WEBSITE AND WE CHANGED WHAT WE NEED */

export const store = configureStore({
  reducer: {
    dishes,
    cart
  }
})