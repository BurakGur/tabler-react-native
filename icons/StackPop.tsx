import * as React from "react";
import type { SVGProps } from "react";
const SvgStackPop = ({
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
    className="icon icon-tabler icon-tabler-stack-pop"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 9.5 4 11l8 4 8-4-3-1.5M4 15l8 4 8-4M12 11V4M9 7l3-3 3 3" />
  </svg>
);
export default SvgStackPop;
