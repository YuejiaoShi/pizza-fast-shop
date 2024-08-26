import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";

const CartOverview: React.FC = () => {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="bg-stone-800 text-stone-200 uppercase p-4 text-sm md:text-base sm:px-6 flex items-center justify-between">
      <p className="text-stone-300 font-semibold sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>€{totalCartPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
