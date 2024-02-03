import * as React from "react";
import type { SVGProps } from "react";
const SvgCornerLeftDownDouble = ({
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
    className="icon icon-tabler icon-tabler-corner-left-down-double"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18 4h-6a3 3 0 0 0-3 3v7" />
    <path d="m13 10-4 4-4-4m8 5-4 4-4-4" />
  </svg>
);
export default SvgCornerLeftDownDouble;
