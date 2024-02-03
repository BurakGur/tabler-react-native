import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRotaryLeft = ({
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
    className="icon icon-tabler icon-tabler-arrow-rotary-left"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6M16 10v10M13 7H3M7 11 3 7l4-4" />
  </svg>
);
export default SvgArrowRotaryLeft;
