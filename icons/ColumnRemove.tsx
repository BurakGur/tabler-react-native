import * as React from "react";
import type { SVGProps } from "react";
const SvgColumnRemove = ({
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
    className="icon icon-tabler icon-tabler-column-remove"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1M16 10l4 4M16 14l4-4" />
  </svg>
);
export default SvgColumnRemove;
