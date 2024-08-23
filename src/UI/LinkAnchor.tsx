import { Link, useNavigate } from "react-router-dom";
import React from "react";

interface LinkAnchorProps {
  children: React.ReactNode;
  to: string;
}

const className = "text-sm text-blue-400 hover:text-blue-600 hover:underline";

const LinkAnchor: React.FC<LinkAnchorProps> = ({ children, to }) => {
  const navigate = useNavigate();

  if (to === "-1")
    return (
      <button onClick={() => navigate(-1)} className={className}>
        {children}
      </button>
    );
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default LinkAnchor;
