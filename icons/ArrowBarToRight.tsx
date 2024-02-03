import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBarToRight = ({
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
    className="icon icon-tabler icon-tabler-arrow-bar-to-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 12H4M14 12l-4 4M14 12l-4-4M20 4v16" />
  </svg>
);
export default SvgArrowBarToRight;
