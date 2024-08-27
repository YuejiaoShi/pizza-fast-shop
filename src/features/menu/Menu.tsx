import { type PizzaType } from "../../servers/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import React from "react";

const Menu: React.FC = () => {
  const menu = useLoaderData() as PizzaType[];
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
};

export default Menu;
