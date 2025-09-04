import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: {
    selectedAddress: null,
    selectedShipmentMethod: null,
  },
};

const productsSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setSelectedAddress: (state, action) => {
      state.order.selectedAddress = action.payload;
    },
    removeSelectedAddress: (state, action) => {
      state.order.selectedAddress = state.order.selectedAddress.filter(
        (addr) => addr._id !== action.payload
      );
    },

    setSelectedShipmentMethod: (state, action) => {
      state.order.selectedShipmentMethod = action.payload;
    },
    clearOrder: (state) => {
      state.order = initialState.order;
    },
  },
});

export const {
  setSelectedAddress,
  removeSelectedAddress,
  setSelectedShipmentMethod,
  clearOrder,
} = productsSlice.actions;
export default productsSlice.reducer;
