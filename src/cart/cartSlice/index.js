import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const initialState = {
  products: JSON.parse(localStorage.getItem("cart")) ?? [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        message.warning("Item already in cart");
      } else {
        state.products = [...state.products, action.payload];
        message.success("Item added to cart");
        localStorage.setItem("cart", JSON.stringify(state.products));
      }
    },
    deleteToCart(state, action) {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(state.products));
      message.success("Item deleted from cart");
    },
    amountCart(state, action) {
      state.products = action.payload;
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
  },
});

export const { addToCart, deleteToCart, amountCart } = cartSlice.actions;
export default cartSlice.reducer;
