import { Button, ButtonProps } from "@nextui-org/button";
import React, { Ref } from "react";

interface FDIconButtonProps extends ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const FDIconButton = React.forwardRef(
  (
    { children, className, ...props }: FDIconButtonProps,
    ref: Ref<HTMLButtonElement>,
  ) => {
    return (
      <Button
        {...props}
        ref={ref}
        isIconOnly
        className={`w-max h-max p-1 min-w-0 bg-transparent ${className ? className : ""}`}
      >
        {children}
      </Button>
    );
  },
);

FDIconButton.displayName = "FDIconButton";

export default FDIconButton;
