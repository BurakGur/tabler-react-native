import * as React from "react";
import type { SVGProps } from "react";
const SvgSortAscendingShapes = ({
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
    className="icon icon-tabler icon-tabler-sort-ascending-shapes"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m4 15 3 3 3-3M7 6v12M14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM17 14l-3.5 6h7z" />
  </svg>
);
export default SvgSortAscendingShapes;
