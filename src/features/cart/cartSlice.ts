import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
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
      if (itemToUpdate?.quantity === 0)
        cartSlice.caseReducers.deleteItem(state, action);
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

export const getCart = (state: RootState) => state.cart.cart;

export const getCurrentQuantityById = (id: number) => (state: RootState) => {
  const item = state.cart.cart.find((item) => item.pizzaId === id);
  return item ? item.quantity : 0;
};
