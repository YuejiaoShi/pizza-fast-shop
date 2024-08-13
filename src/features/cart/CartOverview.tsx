import React from "react";

const CartOverview: React.FC = () => {
  return (
    <div>
      <p>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <a href="#">Open cart &rarr;</a>
    </div>
  );
};

export default CartOverview;
