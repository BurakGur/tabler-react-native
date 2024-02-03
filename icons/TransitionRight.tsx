import * as React from "react";
import type { SVGProps } from "react";
const SvgTransitionRight = ({
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
    className="icon icon-tabler icon-tabler-transition-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3M3 18V6a3 3 0 1 1 6 0v12a3 3 0 0 1-6 0M9 12h8M14 15l3-3-3-3" />
  </svg>
);
export default SvgTransitionRight;
