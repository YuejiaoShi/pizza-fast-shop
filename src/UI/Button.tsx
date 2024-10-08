import { Link } from "react-router-dom";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  to?: string;
  type: "small" | "primary" | "secondary" | "round";
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

const base =
  "inline-block text-sm rounded-full bg-amber-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-amber-300 focus:bg-amber-300 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-offset-2 disabled:cursor-not-allowed";

const styles = {
  small: `${base} py-2 px-4 sm:px-6 sm:py-2.5 text-xs`,
  primary: `${base} py-3 px-4 sm:px-5 sm:py-4`,
  secondary:
    "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  round: `${base} py-1 px-2.5 sm:px-3 sm:py-1.5 text-s`,
};

const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  to,
  type,
  onClick,
}) => {
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
