import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./Cart";

type initialStateType = {
  cart: CartItem[];
};

const initialState: initialStateType = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<string>) {},
    deleteItem(state, actio: PayloadAction<string>) {},
    increaseItemQuantity(state, action: PayloadAction<string>) {},
    decreaseItemQuantity(state, action: PayloadAction<string>) {},
    clearCart(state, action: PayloadAction<string>) {},
  },
});

export default cartSlice.reducer;
