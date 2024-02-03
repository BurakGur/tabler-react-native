import * as React from "react";
import type { SVGProps } from "react";
const SvgMathXDivideY2 = ({
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
    className="icon icon-tabler icon-tabler-math-x-divide-y-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 21 21 3M15 14l3 4.5M21 14l-4.5 7M3 4l6 6M3 10l6-6" />
  </svg>
);
export default SvgMathXDivideY2;
