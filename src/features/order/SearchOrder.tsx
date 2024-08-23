import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full px-4 py-2 text-sm bg-amber-100 placeholder:text-stone-400 w-28 focus:w-72 sm:w-64 transition-all duration-300 focus:outline-none focus:ring focus:ring-amber-500 focus:ring-opacity-50"
      ></input>
    </form>
  );  
};

export default SearchOrder;
