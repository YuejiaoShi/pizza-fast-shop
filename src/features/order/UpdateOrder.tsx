import { OrderType } from "../../servers/apiRestaurant";
import Button from "../../UI/Button";
import React from "react";

interface UpdateOrderProps {
  order: OrderType;
}

const UpdateOrder: React.FC<UpdateOrderProps> = ({ order }) => {
  return <Button type="primary">Make priority</Button>;
};

export default UpdateOrder;
