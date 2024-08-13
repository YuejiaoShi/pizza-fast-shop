// Test ID: IIDSAT

import React from "react";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utilities/helpers";

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
    <div>
      <div>
        <h2>Status</h2>

        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
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
  const orderId = params.orderId as string;
  const order: OrderType = await getOrder(orderId);
  return order;
};

export default Order;
