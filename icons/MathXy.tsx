import * as React from "react";
import type { SVGProps } from "react";
const SvgMathXy = ({
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
    className="icon icon-tabler icon-tabler-math-xy"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m14 9 3 5.063M4 9l6 6M4 15l6-6M20 9l-4.8 9" />
  </svg>
);
export default SvgMathXy;
