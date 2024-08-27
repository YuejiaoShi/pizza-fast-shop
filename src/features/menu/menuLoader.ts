import { getMenu, PizzaType } from "../../servers/apiRestaurant";

// loader function to fetch the menu data
export const menuLoader = async (): Promise<PizzaType[]> => {
  const menu: PizzaType[] = await getMenu();
  return menu;
};
