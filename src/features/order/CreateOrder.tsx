import {
  createOrder,
  CreateOrderRequest,
  OrderType,
} from "../../servers/apiRestaurant";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import store, { AppDispatch, RootState } from "../../store";
import { formatCurrency } from "../../utilities/helpers";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddress } from "../user/userSlice";
import EmptyCart from "../cart/EmptyCart";
import React, { useState } from "react";
import Button from "../../UI/Button";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string): boolean =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

type FormErrors = {
  phone?: string;
};

const CreateOrder: React.FC = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const dispatch = useDispatch<AppDispatch>();

  const formErrors = useActionData() as FormErrors;
  const [withPriority, setWithPriority] = useState<boolean>(false);
  const cart = useSelector(getCart);

  const {
    username,
    status: addressStatue,
    position,
    address,
    error: errorAddress,
  } = useSelector((state: RootState) => state.user);
  const isLoadingAddress = addressStatue === "loading";

  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  function handleGetGeo(event?: React.MouseEvent<HTMLButtonElement>) {
    if (event) {
      event.preventDefault();
    }
    dispatch(fetchAddress());
  }

  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-semibold mb-8">Ready to order? Let's go!</h2>

      <Form method="POST" action="/order/new">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            defaultValue={username}
            required
            className="input grow"
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {formErrors?.phone && (
              <p className="text-xs mt-2 text-red-700 p-2 rounded-md bg-red-100">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center relative">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
              disabled={isLoadingAddress}
              defaultValue={address}
            />
            {addressStatue === "error" && (
              <p className="text-xs mt-2 text-red-700 p-2 rounded-md bg-red-100">
                {errorAddress}
              </p>
            )}
          </div>
          {!position?.latitude && !position?.longitude && (
            <span className="absolute right-1 top-1 z-50 md:right-[5px] md:top-[5px]">
              <Button
                type="small"
                onClick={handleGetGeo}
                disabled={isLoadingAddress}
              >
                Get Your Position
              </Button>
            </span>
          )}
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-amber-400 focus:outline-none focus:ring focus:ring-amber-500 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority.toString()}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)}></input>
          <Button disabled={isSubmitting || isLoadingAddress} type="primary">
            {isSubmitting
              ? "Placing order..."
              : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
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
    const order = {
      ...data,
      cart: JSON.parse(data.cart as string),
      priority: data.priority === "true",
    } as CreateOrderRequest;
    console.log(order);

    const errors: FormErrors = {};
    if (!isValidPhone(order.phone))
      errors.phone = "Please provide a valid phone number.";

    if (Object.keys(errors).length > 0) {
      return new Response(JSON.stringify(errors), {
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

export default CreateOrder;
