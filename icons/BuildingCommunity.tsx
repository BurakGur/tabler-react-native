import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildingCommunity = ({
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
    className="icon icon-tabler icon-tabler-building-community"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m8 9 5 5v7H8v-4m0 4H3v-7l5-5m1 1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17h-8M13 7v.01M17 7v.01M17 11v.01M17 15v.01" />
  </svg>
);
export default SvgBuildingCommunity;
