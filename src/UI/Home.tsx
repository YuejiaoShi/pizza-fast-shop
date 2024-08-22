import React from "react";
import CreateUser from "../features/user/CreateUser";

const Home: React.FC = () => {
  return (
    <div className="my-10 text-center">
      <h1 className="text-xl font-semibold text-center mb-8">
        The best pizza.
        <br />
        <span className="text-amber-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser/>
    </div>
  );
};

export default Home;
