import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowCurveRight = ({
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
    className="icon icon-tabler icon-tabler-arrow-curve-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m10 7 4-4 4 4" />
    <path d="M14 3v4.394A6.74 6.74 0 0 1 11 13a6.74 6.74 0 0 0-3 5.606V21" />
  </svg>
);
export default SvgArrowCurveRight;
