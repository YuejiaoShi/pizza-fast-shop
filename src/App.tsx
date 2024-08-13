import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./UI/Home";
import Menu, { loader as MenuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./UI/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: MenuLoader,
      },
      {
        path: "/cart",
        element: <Cart items={[]} />,
      },
      {
        path: "/order/:orderID",
        element: <Order />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
