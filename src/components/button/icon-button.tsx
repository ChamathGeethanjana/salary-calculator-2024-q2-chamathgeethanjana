import { FC } from "react";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
}

export const IconButton: FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <button
      className="hover:opacity-85 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"
      onClick={onClick}
    >
      {icon}
    </button>
  );
};
