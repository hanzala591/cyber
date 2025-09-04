"use client";
import { createSlice } from "@reduxjs/toolkit";

const userCart =
  typeof window !== "undefined"
    ? JSON.parse(localStorage?.getItem("cart"))
    : [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: userCart !== null ? userCart : [],
  },
  reducers: {
    addQuantity: (state, action) => {
      state.cart = state.cart.map((product) =>
        product.productId === action.payload.productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeQuantity: (state, action) => {
      state.cart = state.cart.map((product) =>
        product.productId === action.payload.productId
          ? product.quantity > 1
            ? { ...product, quantity: product.quantity - 1 }
            : product
          : product
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    addToCart: (state, action) => {
      if (!state.cart.find((p) => p.productId === action.payload)) {
        state.cart.push({ productId: action.payload, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    removeToCart: (state, action) => {
      state.cart = state.cart.filter(
        (value, index) => value.productId !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      (state.cart = []), localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, removeToCart, addQuantity, removeQuantity ,clearCart} =
  cartSlice.actions;
export default cartSlice.reducer;
