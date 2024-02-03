import * as React from "react";
import type { SVGProps } from "react";
const SvgCornerRightUpDouble = ({
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
    className="icon icon-tabler icon-tabler-corner-right-up-double"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 19h6a3 3 0 0 0 3-3V9" />
    <path d="m10 13 4-4 4 4m-8-5 4-4 4 4" />
  </svg>
);
export default SvgCornerRightUpDouble;
