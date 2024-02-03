import * as React from "react";
import type { SVGProps } from "react";
const SvgCornerLeftUpDouble = ({
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
    className="icon icon-tabler icon-tabler-corner-left-up-double"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18 19h-6a3 3 0 0 1-3-3V9" />
    <path d="M13 13 9 9l-4 4m8-5L9 4 5 8" />
  </svg>
);
export default SvgCornerLeftUpDouble;
