import { FC, PropsWithChildren } from "react";

interface ButtonProps {
  onClick: () => void;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  children,
}) => {
  return (
    <button className="text-blue hover:opacity-85" onClick={onClick}>
      {children}
    </button>
  );
};
