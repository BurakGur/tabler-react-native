import * as React from "react";
import type { SVGProps } from "react";
const SvgSort09 = ({
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
    className="icon icon-tabler icon-tabler-sort-0-9"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 12h2M4 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0-4 0M16 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3" />
  </svg>
);
export default SvgSort09;
