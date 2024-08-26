import LinkAnchor from "../../UI/LinkAnchor";
import React from "react";

const EmptyCart: React.FC = () => {
  return (
    <div className="py-3 px-4">
      <LinkAnchor to="/menu">&larr; Back to menu</LinkAnchor>

      <p className="font-semibold mt-6">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
};

export default EmptyCart;
