import * as React from "react";
import type { SVGProps } from "react";
const SvgMotorbike = ({
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
    className="icon icon-tabler icon-tabler-motorbike"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M2 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0M16 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0M7.5 14h5l4-4H6m1.5 4 4-4" />
    <path d="M13 6h2l1.5 3 2 4" />
  </svg>
);
export default SvgMotorbike;
