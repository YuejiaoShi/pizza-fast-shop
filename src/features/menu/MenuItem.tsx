import React from "react";
import { formatCurrency } from "../../utilities/helpers";
import { Pizza } from "../../servers/apiRestaurant";

export type MenuItemProps = {
  pizza: Pizza;
};

const MenuItem: React.FC<MenuItemProps> = ({ pizza }) => {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
