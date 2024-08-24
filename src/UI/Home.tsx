import React from "react";
import CreateUser from "../features/user/CreateUser";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Home: React.FC = () => {
  const username = useSelector((state: RootState) => state.user.username);

  return (
    <div className="my-10 text-center sm:my-16 px-4">
      <h1 className="text-xl font-semibold text-center mb-8 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-amber-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
};

export default Home;
