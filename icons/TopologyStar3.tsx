import * as React from "react";
import type { SVGProps } from "react";
const SvgTopologyStar3 = ({
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
    className="icon icon-tabler icon-tabler-topology-star-3"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 19a2 2 0 1 0-4 0 2 2 0 0 0 4 0M18 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0M10 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0M6 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0M18 19a2 2 0 1 0-4 0 2 2 0 0 0 4 0M14 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0M22 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0M6 12h4M14 12h4M15 7l-2 3M9 7l2 3M11 14l-2 3M13 14l2 3" />
  </svg>
);
export default SvgTopologyStar3;
