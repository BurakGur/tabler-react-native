import * as React from "react";
import type { SVGProps } from "react";
const SvgStairsUp = ({
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
    className="icon icon-tabler icon-tabler-stairs-up"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M22 6h-5v5h-5v5H7v5H2M6 10V3M3 6l3-3 3 3" />
  </svg>
);
export default SvgStairsUp;
