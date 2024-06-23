import React, { ChangeEvent } from "react";

interface TextInputProps {
  placeholder?: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  label,
  value,
  onChange,
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <div className="font-semibold mb-2">
        <h2>{label}</h2>
      </div>
      <input
        placeholder={placeholder}
        className="w-1/2 p-2 border rounded-md pt-3  border-gray"
        type="text"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};
