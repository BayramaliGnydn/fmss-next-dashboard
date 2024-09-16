import React, { CSSProperties, ReactNode, Ref } from "react";

interface FDGridProps {
  container?: boolean;
  item?: boolean;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  children: ReactNode;
  className?: string;
  spacing?: number;
  rowSpacing?: number;
  columnSpacing?: number;
  col?: number;
}

const FDGrid = React.forwardRef(
  (
    {
      container,
      item,
      sm,
      md,
      lg,
      xl,
      children,
      className,
      spacing,
      rowSpacing,
      columnSpacing,
      col,
    }: FDGridProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const classes = [
      container ? "grid-cols-12 w-full" : "",
      sm && item ? `sm:col-span-${sm}` : "",
      md && item ? `md:col-span-${md}` : "",
      lg && item ? `lg:col-span-${lg}` : "",
      xl && item ? `xl:col-span-${xl}` : "",
      col && col ? `col-span-${col}` : "",
      item && "col-span-12",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        ref={ref}
        className={`grid ${classes} ${className ? className : ""} ${item ? "grid-item" : "grid-container"}`}
        style={
          container
            ? spacing
              ? ({
                  "--paddingx": `${spacing}px`,
                  "--paddingy": `${spacing}px`,
                  margin: -spacing,
                } as CSSProperties)
              : ({
                  "--paddingx": rowSpacing ? `${rowSpacing}px` : "0px",
                  marginLeft: rowSpacing ? -rowSpacing : "0px",
                  "--paddingy": columnSpacing ? `${columnSpacing} px` : "0px",
                  marginTop: columnSpacing ? -columnSpacing : "0px",
                } as CSSProperties)
            : {}
        }
      >
        {children}
      </div>
    );
  },
);

FDGrid.displayName = "FDGrid";

export default FDGrid;
