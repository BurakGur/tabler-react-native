import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRotaryLastRight = ({
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
    className="icon icon-tabler icon-tabler-arrow-rotary-last-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0M9 15v6M11.5 9.5 18 3M13 3h5v5" />
  </svg>
);
export default SvgArrowRotaryLastRight;
