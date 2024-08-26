import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
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
    increaseItemQuantity(state, action: PayloadAction<number>) {
      const itemToUpdate = state.cart.find(
        (item) => item.pizzaId === action.payload,
      );
      if (itemToUpdate) {
        itemToUpdate.quantity++;
        itemToUpdate.totalPrice =
          itemToUpdate.unitPrice * itemToUpdate.quantity;
      }
    },
    decreaseItemQuantity(state, action: PayloadAction<number>) {
      const itemToUpdate = state.cart.find(
        (item) => item.pizzaId === action.payload,
      );
      if (itemToUpdate) {
        itemToUpdate.quantity--;
        itemToUpdate.totalPrice =
          itemToUpdate.unitPrice * itemToUpdate.quantity;
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
