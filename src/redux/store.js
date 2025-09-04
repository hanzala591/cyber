import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});
