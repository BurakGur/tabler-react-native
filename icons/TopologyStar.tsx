import * as React from "react";
import type { SVGProps } from "react";
const SvgTopologyStar = ({
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
    className="icon icon-tabler icon-tabler-topology-star"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0M20 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0M8 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0M20 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0M14 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0M7.5 7.5l3 3M7.5 16.5l3-3M13.5 13.5l3 3M16.5 7.5l-3 3" />
  </svg>
);
export default SvgTopologyStar;
