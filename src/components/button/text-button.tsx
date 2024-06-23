import { FC } from "react";

interface TextButtonProps {
  onClick: () => void;
  text: string;
}

export const TextButton: FC<TextButtonProps> = ({ onClick, text }) => {
  return (
    <button className="text-blue hover:opacity-85" onClick={onClick}>
      {text}
    </button>
  );
};
