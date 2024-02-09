import { ITextFieldProps } from "../textField/TextField.interface";

export interface IDatePickerProps
  extends Omit<ITextFieldProps, "onChange" | "value" | "type"> {
  value: Date | undefined;
  onChange: (val: Date | undefined) => void;
}
