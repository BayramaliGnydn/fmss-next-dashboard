import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Colors =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "default"
  | "warning";

export type ButtonColors =
  | "bg-btn-primary"
  | "bg-btn-secondary"
  | "bg-btn-danger"
  | "bg-btn-success"
  | "bg-btn-default"
  | "bg-btn-warning";
