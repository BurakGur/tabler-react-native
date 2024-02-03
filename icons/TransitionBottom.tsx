import * as React from "react";
import type { SVGProps } from "react";
const SvgTransitionBottom = ({
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
    className="icon icon-tabler icon-tabler-transition-bottom"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M21 18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3M12 9v8M9 14l3 3 3-3" />
  </svg>
);
export default SvgTransitionBottom;
