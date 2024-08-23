import { formatCurrency } from "../../utilities/helpers";
import { PizzaType } from "../../servers/apiRestaurant";
import React from "react";

export type MenuItemProps = {
  pizza: PizzaType;
};

const MenuItem: React.FC<MenuItemProps> = ({ pizza }) => {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className="h-24" />
      <div className="flex flex-col">
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div className="mt-auto">
          {!soldOut ? (
            <p className="text-sm uppercase font-medium text-stone-500">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p>Sold out</p>
          )}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
