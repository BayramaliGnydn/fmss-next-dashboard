import React, { ReactNode } from "react";

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

const FDGrid = ({
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
}: FDGridProps) => {
  const classes = [
    container ? "grid-cols-12 w-full" : "",
    sm && item ? `sm:col-span-${sm}` : "",
    md && item ? `md:col-span-${md}` : "",
    lg && item ? `lg:col-span-${lg}` : "",
    xl && item ? `xl:col-span-${xl}` : "",
    col && col ? `col-span-${col}` : "",
    spacing && container ? `gap-${spacing}` : "",
    rowSpacing && container ? `gap-x-${rowSpacing}` : "",
    columnSpacing && container ? `gap-y-${columnSpacing}` : "",
    item && "col-span-12",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`grid ${classes} ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export default FDGrid;
