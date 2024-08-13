import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./UI/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
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
]);

const App: React.FC = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
