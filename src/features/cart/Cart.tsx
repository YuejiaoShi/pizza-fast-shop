import LinkAnchor from "../../UI/LinkAnchor";
import Button from "../../UI/Button";
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

type CartProps = {
  items: CartItem[];
};

const Cart: React.FC<CartProps> = ({ items }) => {
  const cart: CartItem[] = fakeCart;

  return (
    <div>
      <LinkAnchor to="/menu">&larr; Back to menu</LinkAnchor>

      <h2>Your cart, %NAME%</h2>

      <div>
        <Button to="/order/new">Order pizzas</Button>
        <button>Clear cart</button>
      </div>
    </div>
  );
};

export default Cart;
