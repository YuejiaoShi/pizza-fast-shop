import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UpdateOrderAction } from "./features/order/UpdateOrder";
import { orderLoader } from "./features/order/orderLoader";
import { menuLoader } from "./features/menu/menuLoader";
import Order from "./features/order/Order";
import Menu from "./features/menu/Menu";
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
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/:orderID",
        element: <Order />,
        loader: orderLoader,
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
