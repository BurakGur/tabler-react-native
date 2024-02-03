import * as React from "react";
import type { SVGProps } from "react";
const SvgCornerDownRightDouble = ({
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
    className="icon icon-tabler icon-tabler-corner-down-right-double"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 5v6a3 3 0 0 0 3 3h7" />
    <path d="m10 10 4 4-4 4m5-8 4 4-4 4" />
  </svg>
);
export default SvgCornerDownRightDouble;
