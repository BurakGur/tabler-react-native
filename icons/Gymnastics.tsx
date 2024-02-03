import * as React from "react";
import type { SVGProps } from "react";
const SvgGymnastics = ({
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
    className="icon icon-tabler icon-tabler-gymnastics"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0M13 21l1-9 7-6M3 11h6l5 1M11.5 8.5 16 5" />
  </svg>
);
export default SvgGymnastics;
