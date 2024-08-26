import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import React from "react";

const CartOverview: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);

  return (
    <div className="bg-stone-800 text-stone-200 uppercase p-4 text-sm md:text-base sm:px-6 flex items-center justify-between">
      <p className="text-stone-300 font-semibold sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
