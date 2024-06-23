import { FC } from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

export const TextButton: FC<ButtonProps> = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
