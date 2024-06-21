import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: JSON.parse(localStorage.getItem("cart")) ?? [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.products = [...state.products, action.payload];
      console.log(state.products);
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    deleteToCart(state, action) {
      console.log(action.payload);
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
  },
});

export const { addToCart, deleteToCart } = cartSlice.actions;
export default cartSlice.reducer;
