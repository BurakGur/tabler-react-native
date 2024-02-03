import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRotaryRight = ({
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
    className="icon icon-tabler icon-tabler-arrow-rotary-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0M8 10v10M17 11l4-4-4-4M11 7h10" />
  </svg>
);
export default SvgArrowRotaryRight;
