import * as React from "react";
import type { SVGProps } from "react";
const SvgCornerDownLeft = ({
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
    className="icon icon-tabler icon-tabler-corner-down-left"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18 6v6a3 3 0 0 1-3 3H5l4-4m0 8-4-4" />
  </svg>
);
export default SvgCornerDownLeft;
