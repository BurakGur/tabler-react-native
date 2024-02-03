import * as React from "react";
import type { SVGProps } from "react";
const SvgMoped = ({
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
    className="icon icon-tabler icon-tabler-moped"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M5 16v1a2 2 0 0 0 4 0v-5H6a3 3 0 0 0-3 3v1h10a6 6 0 0 1 5-4V7a2 2 0 0 0-2-2h-1M6 9h3" />
  </svg>
);
export default SvgMoped;
