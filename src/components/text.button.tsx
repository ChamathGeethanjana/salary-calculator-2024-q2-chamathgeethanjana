import { FC } from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

export const TextButton: FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button className="text-blue hover:opacity-85" onClick={onClick}>
      {text}
    </button>
  );
};
