import { formatCurrency } from "../../utilities/helpers";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";
import { useSelector } from "react-redux";
import DeleteItem from "./DeleteItem";

type CartItemProps = {
  item: {
    pizzaId: number;
    name: string;
    quantity: number;
    totalPrice: number;
  };
};

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center gap-3 sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
};

export default CartItem;
