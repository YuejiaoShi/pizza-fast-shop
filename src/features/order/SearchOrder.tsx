import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchOrderProps {}

const SearchOrder: React.FC<SearchOrderProps> = () => {
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
      ></input>
    </form>
  );
};

export default SearchOrder;
