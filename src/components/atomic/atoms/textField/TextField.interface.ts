import { ChangeEvent } from "react";

export interface ITextFieldProps {
  value: string;
  name: string;
  type: "text" | "password";
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>, val: string) => void;
  error?: boolean;
  success?: boolean;
  errorMessage?: string;
  className?: string;
}
