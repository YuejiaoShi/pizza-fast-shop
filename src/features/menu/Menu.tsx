import React from "react";
import { getMenu, MenuItem } from "../../servers/apiRestaurant";
import { useLoaderData } from "react-router-dom";

const Menu: React.FC = () => {
  const menu = useLoaderData();
  console.log(menu);
  return <h1>Menu</h1>;
};

// loader function to fetch the menu data
export const loader = async (): Promise<MenuItem[]> => {
  const menu = await getMenu();
  return menu;
};

export default Menu;
