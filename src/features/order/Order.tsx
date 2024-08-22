// Test ID: IIDSAT

import React from "react";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utilities/helpers";

import { getOrder, type OrderType } from "../../servers/apiRestaurant";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

// const order = {
//   id: "ABCDEF",
//   customer: "Jonas",
//   phone: "123456789",
//   address: "Arroios, Lisbon , Portugal",
//   priority: true,
//   estimatedDelivery: "2027-04-25T10:00:00",
//   cart: [
//     {
//       pizzaId: 7,
//       name: "Napoli",
//       quantity: 3,
//       unitPrice: 16,
//       totalPrice: 48,
//     },
//     {
//       pizzaId: 5,
//       name: "Diavola",
//       quantity: 2,
//       unitPrice: 16,
//       totalPrice: 32,
//     },
//     {
//       pizzaId: 3,
//       name: "Romana",
//       quantity: 1,
//       unitPrice: 15,
//       totalPrice: 15,
//     },
//   ],
//   position: "-9.000,38.000",
//   orderPrice: 95,
//   priorityPrice: 19,
// };

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
  console.log("Params:", params);
  if (!params.orderID) {
    throw new Error("Order ID is missing");
  }
  console.log("Params:", params);
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
