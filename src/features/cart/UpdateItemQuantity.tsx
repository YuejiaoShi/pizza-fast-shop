import Button from "../../UI/Button";
import React from "react";

interface UpdateItemQuantityProps {
  pizzaId: number;
}

const UpdateItemQuantity: React.FC<UpdateItemQuantityProps> = ({ pizzaId }) => {
  return (
    <div className="flex gap-1 items-center md:gap-3">
      <Button type="round">-</Button>
      <Button type="round">+</Button>
    </div>
  );
};

export default UpdateItemQuantity;
