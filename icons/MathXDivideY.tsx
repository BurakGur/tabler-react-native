import * as React from "react";
import type { SVGProps } from "react";
const SvgMathXDivideY = ({
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
    className="icon icon-tabler icon-tabler-math-x-divide-y"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m9 3 6 6M9 9l6-6M9 15l3 4.5M15 15l-4.5 7M5 12h14" />
  </svg>
);
export default SvgMathXDivideY;
