import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import Button from "../../UI/Button";
import React from "react";

interface DeleteItemProps {
  pizzaId: number;
}

const DeleteItem: React.FC<DeleteItemProps> = ({ pizzaId }) => {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <div>
      <Button type="small" onClick={handleDeleteItem}>
        Delete
      </Button>
    </div>
  );
};

export default DeleteItem;
