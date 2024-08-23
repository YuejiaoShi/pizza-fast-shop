import { Link } from "react-router-dom";
import React from "react";

interface LinkAnchorProps {
  children: React.ReactNode;
  to: string;
}

const LinkAnchor: React.FC<LinkAnchorProps> = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="text-sm text-blue-400 hover:text-blue-600 hover:underline"
    >
      {children}
    </Link>
  );
};

export default LinkAnchor;
