import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/userName";


const Header: React.FC = () => {
  return (
    <header className="bg-amber-500 uppercase px-4 py-3 border-b-4 border-stone-300">
      <Link to="/" className="tracking-widest">
        Pizza Fast Denmark A/S
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
};

export default Header;
