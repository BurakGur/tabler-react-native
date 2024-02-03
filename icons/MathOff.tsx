import * as React from "react";
import type { SVGProps } from "react";
const SvgMathOff = ({
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
    className="icon icon-tabler icon-tabler-math-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m14 19 2.5-2.5M18.5 14.5 20 13M3 3l18 18M19 5h-7l-.646 2.262M10.448 10.431 8 19l-3-6H3" />
  </svg>
);
export default SvgMathOff;
