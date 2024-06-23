import { FC } from "react";

interface IconButtonProps {
  icon: string;
  onClick: () => void;
}

export const IconButton: FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <button onClick={onClick}>
      <i className={icon}></i>
    </button>
  );
};
