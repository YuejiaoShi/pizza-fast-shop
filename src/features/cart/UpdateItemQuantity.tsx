import { decreaseItemQuantity } from "./cartSlice";
import { useDispatch } from "react-redux";
import Button from "../../UI/Button";
import React from "react";

interface UpdateItemQuantityProps {
  pizzaId: number;
}

const UpdateItemQuantity: React.FC<UpdateItemQuantityProps> = ({ pizzaId }) => {
  const dispatch = useDispatch();

  function handleMinus() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  return (
    <div className="flex gap-1 items-center md:gap-3">
      <Button type="round" onClick={handleMinus}>
        -
      </Button>
      <Button type="round">+</Button>
    </div>
  );
};

export default UpdateItemQuantity;
