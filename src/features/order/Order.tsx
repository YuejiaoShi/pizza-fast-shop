// Test ID: IIDSAT

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utilities/helpers";
import React from "react";

import { getOrder, type OrderType } from "../../servers/apiRestaurant";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

const Order: React.FC = () => {
  const order = useLoaderData() as OrderType;
  // Everyone can search for all orders, so for privacy reasons we're gonna
  // exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="px-4 py-6 space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h2 className="text-cl font-semibold">Order #{id} Status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="bg-red-500 rounded-full py-1 px-3 text-sm uppercase font-semibold text-red-50 tracking-wide">
              Priority
            </span>
          )}
          <span className="bg-green-500 rounded-full py-1 px-3 text-sm uppercase font-semibold text-green-50 tracking-wide">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-2 bg-stone-200 px-6 py-5 ">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
};

// LoaderFunctionArgs types the parameters for a React Router loader function,
//  including route parameters and request details.
export const loader = async ({
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

export default Order;
