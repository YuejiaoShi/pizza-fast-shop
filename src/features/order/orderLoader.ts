// LoaderFunctionArgs types the parameters for a React Router loader function,

import { getOrder, OrderType } from "../../servers/apiRestaurant";
import { LoaderFunctionArgs } from "react-router-dom";

//  including route parameters and request details.
export const orderLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<OrderType> => {
  if (!params.orderID) {
    throw new Error("Order ID is missing");
  }
  const orderID = params.orderID as string;
  try {
    const order = await getOrder(orderID);
    return order;
  } catch (error) {
    console.error("Failed to fetch order:", error);
    throw new Error(`Failed to fetch order ${orderID}`);
  }
};
