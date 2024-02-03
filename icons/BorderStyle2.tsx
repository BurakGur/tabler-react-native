import * as React from "react";
import type { SVGProps } from "react";
const SvgBorderStyle2 = ({
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
    className="icon icon-tabler icon-tabler-border-style-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 18v.01M8 18v.01M12 18v.01M16 18v.01M20 18v.01M18 12h2M11 12h2M4 12h2M4 6h16" />
  </svg>
);
export default SvgBorderStyle2;
