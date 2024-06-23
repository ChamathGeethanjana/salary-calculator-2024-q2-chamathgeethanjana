import { FC, PropsWithChildren } from "react";

interface TextButtonProps {
  onClick: () => void;
}

export const TextButton: FC<PropsWithChildren<TextButtonProps>> = ({
  onClick,
  children,
}) => {
  return (
    <button className="text-primary hover:opacity-85" onClick={onClick}>
      {children}
    </button>
  );
};
