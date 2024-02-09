"use client";

import { Option, Select, Typography } from "@material-tailwind/react";

import { IDropdownProps } from "./Dropdown.interface";

const Dropdown = ({
  onChange,
  value,
  options,
  name,
  placeholder,
  error,
  success,
  className,
  errorMessage,
}: IDropdownProps) => {
  return (
    <div className="flex flex-col gap-1">
      <Select
        className={className}
        placeholder={placeholder}
        label={placeholder}
        name={name}
        color="light-green"
        size="md"
        onChange={(e) => onChange(e ?? "")}
        value={value}
        error={error}
        success={success}
      >
        {options.map((option, index) => (
          <Option key={index} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>

      {errorMessage && (
        <Typography color="red" variant="small" placeholder={undefined}>
          {errorMessage}
        </Typography>
      )}
    </div>
  );
};

export default Dropdown;
