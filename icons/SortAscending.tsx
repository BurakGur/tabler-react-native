import * as React from "react";
import type { SVGProps } from "react";
const SvgSortAscending = ({
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
    className="icon icon-tabler icon-tabler-sort-ascending"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 6h7M4 12h7M4 18h9M15 9l3-3 3 3M18 6v12" />
  </svg>
);
export default SvgSortAscending;
