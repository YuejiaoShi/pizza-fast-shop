import React, { useState } from "react";
import { Form, redirect, useNavigation } from "react-router-dom";
import {
  createOrder,
  CreateOrderRequest,
  OrderType,
} from "../../servers/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string): boolean =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

type CartItem = {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

const fakeCart: CartItem[] = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetable",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

const CreateOrder: React.FC = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  // const [withPriority, setWithPriority] = useState<boolean>(false);
  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form method="POST" action="/order/new">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)}></input>
          <button disabled={isSubmitting}>
            {isSubmitting ? "Placing order..." : "Order now"}
          </button>
        </div>
      </Form>
    </div>
  );
};

export async function action({
  request,
}: {
  request: Request;
}): Promise<Response> {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const order: CreateOrderRequest = {
      ...data,
      cart: JSON.parse(data.cart as string),
      priority: data.priority === "on",
    } as CreateOrderRequest;

    const newOrder: OrderType = await createOrder(order);
    console.log(order);

    if (newOrder.id) {
      return redirect(`/order/${newOrder.id}`);
    } else {
      console.error("Order ID is undefined.");
      return redirect("/error");
    }
  } catch (error) {
    console.error("Error in createOrderAction:", error);
    return redirect("/error");
  }
}

export default CreateOrder;
