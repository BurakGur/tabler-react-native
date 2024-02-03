import * as React from "react";
import type { SVGProps } from "react";
const SvgSortAZ = ({
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
    className="icon icon-tabler icon-tabler-sort-a-z"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 8h4l-4 8h4M4 16v-6a2 2 0 1 1 4 0v6M4 13h4M11 12h2" />
  </svg>
);
export default SvgSortAZ;
