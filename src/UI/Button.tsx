import React from "react";

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ children, disabled = false }) => {
  return (
    <button
      disabled={disabled}
      className="bg-amber-500 text-stone-800 py-3 px-4 font-semibold uppercase tracking-wide rounded-full hover:bg-amber-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-amber-300 focus:bg-amber-300 focus:ring-offset-2 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};

export default Button;
