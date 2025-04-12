export type ButtonType = "primary" | "dashed" | "text" | "link" | "default";
export type ButtonVariant =
  | "solid"
  | "outline"
  | "dashed"
  | "filled"
  | "text"
  | "link";

export interface ButtonProps {
  type?: ButtonType;
  disabled?: boolean;
  loading?: boolean;
  size?: "large" | "default" | "small";
  variant?: ButtonVariant;
}
