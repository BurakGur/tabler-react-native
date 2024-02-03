import * as React from "react";
import type { SVGProps } from "react";
const SvgBorderStyle = ({
  size = 24,
  stroke = 2,
  ...props
}: {
  size: number,
  stroke: number,
  props: SVGProps,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={stroke}
    className="icon icon-tabler icon-tabler-border-style"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 20V6a2 2 0 0 1 2-2h14M20 8v.01M20 12v.01M20 16v.01M8 20v.01M12 20v.01M16 20v.01M20 20v.01" />
  </svg>
);
export default SvgBorderStyle;
