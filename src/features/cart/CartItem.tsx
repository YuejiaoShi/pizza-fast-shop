import { formatCurrency } from "../../utilities/helpers";

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

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
};

export default CartItem;
