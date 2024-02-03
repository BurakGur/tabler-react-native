import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRotaryFirstRight = ({
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
    className="icon icon-tabler icon-tabler-arrow-rotary-first-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0M8 10v10M10.5 9.5 19 18M14 18h5v-5" />
  </svg>
);
export default SvgArrowRotaryFirstRight;
