import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsDiff = ({
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
    className="icon icon-tabler icon-tabler-arrows-diff"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 16h10M11 16l4 4M11 16l4-4M13 8H3M13 8l-4 4M13 8 9 4" />
  </svg>
);
export default SvgArrowsDiff;
