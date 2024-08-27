import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import { action as UpdateOrderAction } from "./features/order/UpdateOrder";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Order, { loader as OrderLoader } from "./features/order/Order";
import Menu, { loader as MenuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import AppLayout from "./UI/AppLayout";
import Error from "./UI/Error";
import Home from "./UI/Home";
import React from "react";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: MenuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/:orderID",
        element: <Order />,
        loader: OrderLoader,
        errorElement: <Error />,
        action: UpdateOrderAction,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
