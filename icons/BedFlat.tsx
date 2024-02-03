import * as React from "react";
import type { SVGProps } from "react";
const SvgBedFlat = ({
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
    className="icon icon-tabler icon-tabler-bed-flat"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 11a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10 13h11v-2a3 3 0 0 0-3-3h-8zM3 16h18" />
  </svg>
);
export default SvgBedFlat;
