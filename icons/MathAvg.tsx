import * as React from "react";
import type { SVGProps } from "react";
const SvgMathAvg = ({
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
    className="icon icon-tabler icon-tabler-math-avg"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 21 21 3M4 12a8 8 0 1 0 16 0 8 8 0 1 0-16 0" />
  </svg>
);
export default SvgMathAvg;
