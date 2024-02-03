import * as React from "react";
import type { SVGProps } from "react";
const SvgCornerDownLeftDouble = ({
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
    className="icon icon-tabler icon-tabler-corner-down-left-double"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19 5v6a3 3 0 0 1-3 3H9" />
    <path d="m13 10-4 4 4 4m-5-8-4 4 4 4" />
  </svg>
);
export default SvgCornerDownLeftDouble;
