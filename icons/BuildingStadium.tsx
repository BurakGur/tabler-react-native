import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildingStadium = ({
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
    className="icon icon-tabler icon-tabler-building-stadium"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 12a8 2 0 1 0 16 0 8 2 0 1 0-16 0" />
    <path d="M4 12v7c0 .94 2.51 1.785 6 2v-3h4v3c3.435-.225 6-1.07 6-2v-7M15 6h4V3h-4v7M7 6h4V3H7v7" />
  </svg>
);
export default SvgBuildingStadium;
