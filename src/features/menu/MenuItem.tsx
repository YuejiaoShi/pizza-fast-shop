import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import { formatCurrency } from "../../utilities/helpers";
import { PizzaType } from "../../servers/apiRestaurant";
import { useDispatch, useSelector } from "react-redux";
import DeleteItem from "../cart/DeleteItem";
import Button from "../../UI/Button";
import React from "react";

export type MenuItemProps = {
  pizza: PizzaType;
};

const MenuItem: React.FC<MenuItemProps> = ({ pizza }) => {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  function handleAddToCart() {
    const newPizza = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newPizza));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm uppercase font-medium text-stone-500">
              Sold out
            </p>
          )}

          {currentQuantity > 0 && <DeleteItem pizzaId={id} />}

          {!soldOut && currentQuantity === 0 && (
            <Button type="small" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
