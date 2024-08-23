import { Link } from "react-router-dom";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  to?: string;
}

const className =
  "bg-amber-500 text-stone-800 py-3 px-4 font-semibold uppercase tracking-wide rounded-full hover:bg-amber-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-amber-300 focus:bg-amber-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px=6 sm:py-4";

const Button: React.FC<ButtonProps> = ({ children, disabled = false, to }) => {
  if (to)
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
