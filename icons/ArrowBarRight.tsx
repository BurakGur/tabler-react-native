import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBarRight = ({
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
    className="icon icon-tabler icon-tabler-arrow-bar-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20 12H10M20 12l-4 4M20 12l-4-4M4 4v16" />
  </svg>
);
export default SvgArrowBarRight;
