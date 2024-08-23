import { Link } from "react-router-dom";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  to?: string;
  type: "small" | "primary";
}

const base =
  "bg-amber-500 text-stone-800 font-semibold uppercase tracking-wide rounded-full hover:bg-amber-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-amber-300 focus:bg-amber-300 focus:ring-offset-2 disabled:cursor-not-allowed";

const styles = {
  small: `${base} py-2 px-4 sm:px-6 sm:py-2.5 text-xs`,
  primary: `${base} py-3 px-4 sm:px-5 sm:py-4`,
};

const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  to,
  type,
}) => {
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
