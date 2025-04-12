import type * as rtk from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type CartRootState = ReturnType<typeof store.getState>;
export type CartDispatch = typeof store.dispatch;
