import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareF5 = ({
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
    className="icon icon-tabler icon-tabler-square-f5"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M13 14.25c0 .414.336.75.75.75H15a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2V9h3M8 12h2M10 9H8v6" />
  </svg>
);
export default SvgSquareF5;
