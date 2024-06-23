import { FC } from "react";

interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
}

export const NumberInput: FC<NumberInputProps> = ({ value, onChange }) => {
  return (
    <div className=" pt-3">
      <div>
        <input
          className="w-1/2 p-2 border rounded-md pt-3  border-gray"
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
};
