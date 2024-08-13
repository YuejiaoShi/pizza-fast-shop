import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const Error: React.FC = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>%MESSAGE%</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
};

export default Error;
