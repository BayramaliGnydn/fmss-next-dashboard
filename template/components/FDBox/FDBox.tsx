import React from "react";

interface FDBoxProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
  className?: string;
}

const FDBox = ({ children, className, ...props }: FDBoxProps) => {
  return (
    <div {...props} className={`flex ${className}`}>
      {children}
    </div>
  );
};

export default FDBox;
