import {
  createOrder,
  CreateOrderRequest,
  OrderType,
} from "../../servers/apiRestaurant";
import { clearCart } from "../cart/cartSlice";
import { redirect } from "react-router-dom";
import store from "../../store";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string): boolean =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );
const PHONE_ERROR = "Please provide a valid phone number.";
export async function createOrderAction({
  request,
}: {
  request: Request;
}): Promise<Response> {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const order = {
      ...data,
      cart: JSON.parse(data.cart as string),
      priority: data.priority === "true",
    } as CreateOrderRequest;

    console.log(order);

    if (!isValidPhone(order.phone)) {
      return new Response(JSON.stringify(PHONE_ERROR), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const newOrder: OrderType = await createOrder(order);
    if (newOrder.id) {
      store.dispatch(clearCart());
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
