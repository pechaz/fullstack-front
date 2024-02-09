import { ChangeEvent } from "react";

export interface ITextAreaProps {
  value: string;
  name: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>, val: string) => void;
  error?: boolean;
  success?: boolean;
  errorMessage?: string;
  className?: string;
}
