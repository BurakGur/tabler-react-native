import * as React from "react";
import type { SVGProps } from "react";
const SvgMilk = ({
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
    className="icon icon-tabler icon-tabler-milk"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 6h8V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1zM16 6l1.094 1.759a6 6 0 0 1 .906 3.17V19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8.071a6 6 0 0 1 .906-3.17L8 6" />
    <path d="M10 16a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10 10h4" />
  </svg>
);
export default SvgMilk;
