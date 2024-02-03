import * as React from "react";
import type { SVGProps } from "react";
const SvgCornerUpRightDouble = ({
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
    className="icon icon-tabler icon-tabler-corner-up-right-double"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 18v-6a3 3 0 0 1 3-3h7" />
    <path d="m10 13 4-4-4-4m5 8 4-4-4-4" />
  </svg>
);
export default SvgCornerUpRightDouble;
