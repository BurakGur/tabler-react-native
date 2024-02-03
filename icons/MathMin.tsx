import * as React from "react";
import type { SVGProps } from "react";
const SvgMathMin = ({
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
    className="icon icon-tabler icon-tabler-math-min"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    <path d="M3 13s1-9 4-9c2.48 0 5.643 9.565 8.36 12.883M18.748 17.038Q19.801 15.718 21 9" />
  </svg>
);
export default SvgMathMin;
