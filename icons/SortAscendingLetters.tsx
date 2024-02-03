import * as React from "react";
import type { SVGProps } from "react";
const SvgSortAscendingLetters = ({
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
    className="icon icon-tabler icon-tabler-sort-ascending-letters"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 10V5c0-1.38.62-2 2-2s2 .62 2 2v5m0-3h-4M19 21h-4l4-7h-4M4 15l3 3 3-3M7 6v12" />
  </svg>
);
export default SvgSortAscendingLetters;
