import * as React from "react";
import type { SVGProps } from "react";
const SvgTransitionLeft = ({
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
    className="icon icon-tabler icon-tabler-transition-left"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 21a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3M21 6v12a3 3 0 0 1-6 0V6a3 3 0 0 1 6 0M15 12H7M10 9l-3 3 3 3" />
  </svg>
);
export default SvgTransitionLeft;
