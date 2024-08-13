import { Button, ButtonProps } from "@nextui-org/button";
import React from "react";

interface FDIconButtonProps extends ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const FDIconButton = ({ children, className, ...props }: FDIconButtonProps) => {
  return (
    <Button
      {...props}
      className={`w-max h-max p-1 min-w-0 bg-transparent ${className ? className : ""}`}
    >
      {children}
    </Button>
  );
};

export default FDIconButton;
