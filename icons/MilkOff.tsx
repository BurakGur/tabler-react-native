import * as React from "react";
import type { SVGProps } from "react";
const SvgMilkOff = ({
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
    className="icon icon-tabler icon-tabler-milk-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 6h6V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1M16 6l1.094 1.759a6 6 0 0 1 .906 3.17V14m0 4v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8.071a6 6 0 0 1 .906-3.17l.327-.525" />
    <path d="M10 16a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 3l18 18" />
  </svg>
);
export default SvgMilkOff;
