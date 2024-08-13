import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

interface ErrorResponseImpl {
  data?: string;
}

const Error: React.FC = () => {
  const navigate = useNavigate();
  const error = useRouteError() as ErrorResponseImpl;

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
};

export default Error;
