import { FC, PropsWithChildren } from "react";

interface ButtonProps {
  onClick: () => void;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  children,
}) => {
  return (
    <button
      className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-85"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
