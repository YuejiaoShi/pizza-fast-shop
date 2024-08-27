import { useFetcher } from "react-router-dom";
import Button from "../../UI/Button";
import React from "react";

const UpdateOrder: React.FC = () => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
};

export default UpdateOrder;
