import * as React from "react";
import type { SVGProps } from "react";
const SvgGrillSpatula = ({
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
    className="icon icon-tabler icon-tabler-grill-spatula"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m10.2 10.2 6.3 6.3M19.347 16.575l1.08 1.079a1.96 1.96 0 0 1-2.773 2.772l-1.08-1.079a1.96 1.96 0 0 1 2.773-2.772M3 7l3.05 3.15a2.9 2.9 0 0 0 4.1-4.1L7 3z" />
  </svg>
);
export default SvgGrillSpatula;
