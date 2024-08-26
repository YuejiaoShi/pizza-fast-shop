import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./Cart";

type initialStateType = {
  cart: CartItem[];
};

const initialState: initialStateType = {
  cart: [
    {
      pizzaId: 12,
      name: "hhhhh",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action: PayloadAction<string>) {},
    decreaseItemQuantity(state, action: PayloadAction<string>) {},
    clearCart(state, action: PayloadAction<string>) {},
  },
});

export default cartSlice.reducer;
