import SearchOrder from "../features/order/SearchOrder";
import { Link } from "react-router-dom";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-amber-500 uppercase px-4 py-3 border-b-4 border-stone-300 sm:px-6 flex items-center justify-between">
      <Link to="/" className="tracking-widest">
        Pizza Fast Denmark A/S
      </Link>
      <SearchOrder />
    </header>
  );
};

export default Header;
