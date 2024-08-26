import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";
import { useDispatch } from "react-redux";
import Button from "../../UI/Button";
import React from "react";

interface UpdateItemQuantityProps {
  pizzaId: number;
}

const UpdateItemQuantity: React.FC<UpdateItemQuantityProps> = ({ pizzaId }) => {
  const dispatch = useDispatch();

  function handleDecrease() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  function handleIncrease() {
    dispatch(increaseItemQuantity(pizzaId));
  }

  return (
    <div className="flex gap-1 items-center md:gap-3">
      <Button type="round" onClick={handleDecrease}>
        -
      </Button>
      <Button type="round" onClick={handleIncrease}>
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
