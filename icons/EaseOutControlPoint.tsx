import * as React from "react";
import type { SVGProps } from "react";
const SvgEaseOutControlPoint = ({
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
    className="icon icon-tabler icon-tabler-ease-out-control-point"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 21S13 5 21 5M7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7 5h2M14 5h-2" />
  </svg>
);
export default SvgEaseOutControlPoint;
