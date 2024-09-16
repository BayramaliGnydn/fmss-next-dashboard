import React, { Ref } from "react";

interface FDBoxProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
  className?: string;
}

const FDBox = React.forwardRef(
  ({ children, className, ...props }: FDBoxProps, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} ref={ref} className={`flex ${className}`}>
        {children}
      </div>
    );
  },
);

FDBox.displayName = "FDBox";

export default FDBox;
