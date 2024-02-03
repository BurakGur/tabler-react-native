import * as React from "react";
import type { SVGProps } from "react";
const SvgMathPiDivide2 = ({
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
    className="icon icon-tabler icon-tabler-math-pi-divide-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 15h3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h3M5 12h14M10 9V3M14 3v6M15 3H9" />
  </svg>
);
export default SvgMathPiDivide2;
