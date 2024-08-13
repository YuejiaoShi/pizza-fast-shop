import React, { FormEvent, useState } from "react";

interface SearchOrderProps {}

const SearchOrder: React.FC<SearchOrderProps> = () => {
  const [query, setQuery] = useState("");
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
