import { Button, ButtonProps } from "@nextui-org/button";
import React, { ReactNode, Ref } from "react";

import { ButtonColors } from "@/types";

interface FDButtonProps extends ButtonProps {
  children: ReactNode | string;
  colorType?: ButtonType;
}

export type ButtonType =
  | "Btn-Success"
  | "Btn-Danger"
  | "Btn-Default"
  | "Btn-Primary"
  | "Btn-Warning"
  | "Btn-Secondary";

const ButtonTypeEnum = {
  "Btn-Primary": "bg-btn-primary",
  "Btn-Secondary": "bg-btn-secondary",
  "Btn-Default": "bg-btn-default",
  "Btn-Danger": "bg-btn-danger",
  "Btn-Success": "bg-btn-success",
  "Btn-Warning": "bg-btn-warning",
} as { [key in ButtonType]: ButtonColors | undefined };

const FDButton = (
  { children, className, colorType = "Btn-Primary", ...props }: FDButtonProps,
  ref: Ref<HTMLButtonElement>,
) => {
  return (
    <Button
      className={`min-w-[150px] text-white ${ButtonTypeEnum[colorType]} ${className ? className : ""}`}
      {...props}
      ref={ref}
    >
      {children}
    </Button>
  );
};

export default React.forwardRef(FDButton);
