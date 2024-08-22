import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header: React.FC = () => {
  return (
    <header className="bg-amber-500">
      <Link to="/">PizzaFast Co.</Link>;
      <SearchOrder />
    </header>
  );
};

export default Header;
