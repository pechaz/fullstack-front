"use client";

import { Input, Typography } from "@material-tailwind/react";

import { ITextFieldProps } from "./TextField.interface";

const TextInput = ({
  onChange,
  value,
  type,
  name,
  placeholder,
  error,
  success,
  className,
  errorMessage,
}: ITextFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <Input
        className={className}
        type={type}
        placeholder={placeholder}
        label={placeholder}
        name={name}
        color="light-green"
        size="md"
        onChange={(e) => onChange(e, e.target.value)}
        value={value}
        error={error}
        success={success}
        crossOrigin={undefined}
      />

      {errorMessage && (
        <Typography color="red" variant="small" placeholder={undefined}>
          {errorMessage}
        </Typography>
      )}
    </div>
  );
};

export default TextInput;
