import { updateOrder, UpdateOrderRequest } from "../../servers/apiRestaurant";
import { ActionFunctionArgs, useFetcher } from "react-router-dom";
import Button from "../../UI/Button";
import React from "react";

const UpdateOrder: React.FC = () => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
};

export default UpdateOrder;

export async function UpdateOrderAction({
  params,
}: ActionFunctionArgs): Promise<void> {
  const data: UpdateOrderRequest = { priority: true };
  console.log(params);
  if (typeof params.orderID === "undefined") {
    throw new Error("Invalid order Id undefined");
  } else {
    await updateOrder(params.orderID, data);
  }
}
