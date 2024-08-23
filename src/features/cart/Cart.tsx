import LinkAnchor from "../../UI/LinkAnchor";
import Button from "../../UI/Button";
import CartItem from "./CartItem";
import React from "react";

export type CartItem = {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

const fakeCart: CartItem[] = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetable",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

const Cart: React.FC = () => {
  const cart: CartItem[] = fakeCart;

  return (
    <div className="py-4 px-3">
      <LinkAnchor to="/menu">&larr; Back to menu</LinkAnchor>

      <h2 className="mt-7 text-xl font-semibold">Your cart, %NAME%</h2>

      <ul className="divide-y divide-stone-200 border-b mt-3">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary">Clear Cart</Button>
      </div>
    </div>
  );
};

export default Cart;
