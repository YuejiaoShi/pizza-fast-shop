import React from "react";
import { getMenu, type Pizza } from "../../servers/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

const Menu: React.FC = () => {
  const menu = useLoaderData() as Pizza[];
  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
};

// loader function to fetch the menu data
export const loader = async (): Promise<Pizza[]> => {
  const menu = await getMenu();
  return menu;
};

export default Menu;
