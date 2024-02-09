"use client";

import { Textarea, Typography } from "@material-tailwind/react";

import { ITextAreaProps } from "./TextArea.interface";

const TextArea = ({
  onChange,
  value,
  name,
  placeholder,
  error,
  success,
  className,
  errorMessage,
}: ITextAreaProps) => {
  return (
    <div className="flex flex-col gap-1">
      <Textarea
        className={className}
        placeholder={placeholder}
        label={placeholder}
        name={name}
        color="light-green"
        size="md"
        onChange={(e) => onChange(e, e.target.value)}
        value={value}
        error={error}
        success={success}
      />

      {errorMessage && (
        <Typography color="red" variant="small" placeholder={undefined}>
          {errorMessage}
        </Typography>
      )}
    </div>
  );
};

export default TextArea;
