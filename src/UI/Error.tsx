import { useRouteError } from "react-router-dom";
import LinkAnchor from "./LinkAnchor";
import React from "react";

interface ErrorResponseImpl {
  data?: string;
  message?: string;
}

const Error: React.FC = () => {
  const error = useRouteError() as ErrorResponseImpl;

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkAnchor to="-1">&larr; Go back</LinkAnchor>
    </div>
  );
};

export default Error;
