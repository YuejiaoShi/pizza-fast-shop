import { useSelector } from "react-redux";
import { RootState } from "../../store";
import React from "react";

const UserName: React.FC = () => {
  const username = useSelector((state: RootState) => state.user.username);

  if (!username) return null;

  return (
    <div className="text-sm font-semibold hidden md:block">{username}</div>
  );
};

export default UserName;
