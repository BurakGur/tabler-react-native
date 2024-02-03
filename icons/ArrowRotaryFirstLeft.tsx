import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRotaryFirstLeft = ({
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
    className="icon icon-tabler icon-tabler-arrow-rotary-first-left"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6M16 10v10M13.5 9.5 5 18M10 18H5v-5" />
  </svg>
);
export default SvgArrowRotaryFirstLeft;
