import * as React from "react";
import type { SVGProps } from "react";
const SvgChristmasTreeOff = ({
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
    className="icon icon-tabler icon-tabler-christmas-tree-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9.5 5.5 12 3l4 4-2 1 4 4-1.5.5M17 17H5l4-4-3-1 3-3M14 17v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3M3 3l18 18" />
  </svg>
);
export default SvgChristmasTreeOff;
