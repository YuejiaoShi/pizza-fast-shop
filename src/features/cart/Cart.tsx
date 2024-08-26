import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import LinkAnchor from "../../UI/LinkAnchor";
import { RootState } from "../../store";
import Button from "../../UI/Button";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import React from "react";

export type CartItem = {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

const Cart: React.FC = () => {
  const cart: CartItem[] = useSelector(getCart);
  const username = useSelector((state: RootState) => state.user.username);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="py-4 px-3">
      <LinkAnchor to="/menu">&larr; Back to menu</LinkAnchor>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="divide-y divide-stone-200 border-b mt-3">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={handleClearCart}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
};

export default Cart;
