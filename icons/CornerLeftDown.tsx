import * as React from "react";
import type { SVGProps } from "react";
const SvgCornerLeftDown = ({
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
    className="icon icon-tabler icon-tabler-corner-left-down"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18 6h-6a3 3 0 0 0-3 3v10l-4-4m8 0-4 4" />
  </svg>
);
export default SvgCornerLeftDown;
