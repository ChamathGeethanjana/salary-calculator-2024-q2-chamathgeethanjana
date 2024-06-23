import { FC } from "react";

interface NumberInputProps {
  placeholder?: string;
  label?: string;
  value: number;
  onChange: (value: number) => void;
}

export const NumberInput: FC<NumberInputProps> = ({
  placeholder,
  label,
  value,
  onChange,
}) => {
  return (
    <div className=" pt-3">
      <div>
        <div className="font-semibold mb-2">
          <h2>{label}</h2>
        </div>
        <input
          className="w-1/2 p-2 border rounded-md pt-3  border-gray"
          type="number"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
};
