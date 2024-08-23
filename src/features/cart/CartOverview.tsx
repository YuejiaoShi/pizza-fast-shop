import React from "react";
import { Link } from "react-router-dom";

const CartOverview: React.FC = () => {
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
