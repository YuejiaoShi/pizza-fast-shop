import { updateOrder, UpdateOrderRequest } from "../../servers/apiRestaurant";
import { ActionFunctionArgs } from "react-router-dom";

export async function updateOrderAction({
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
