import * as React from "react";
import type { SVGProps } from "react";
const SvgHierarchy3 = ({
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
    className="icon icon-tabler icon-tabler-hierarchy-3"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M18 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M2 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M14 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M5 17l2-3M9 10l2-3M13 7l2 3M17 14l2 3M15 14l-2 3M9 14l2 3" />
  </svg>
);
export default SvgHierarchy3;
