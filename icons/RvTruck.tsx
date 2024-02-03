import * as React from "react";
import type { SVGProps } from "react";
const SvgRvTruck = ({
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
    className="icon icon-tabler icon-tabler-rv-truck"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M9 17h6" />
    <path d="M19 17h1a1 1 0 0 0 1-1v-4.528a2 2 0 0 0-.211-.894l-.96-1.92A3 3 0 0 0 17.146 7H6a3 3 0 0 0-3 3v6a1 1 0 0 0 1 1h1M3 12h18M15 12V7M6 5.5A1.5 1.5 0 0 1 7.5 4h7A1.5 1.5 0 0 1 16 5.5v0A1.5 1.5 0 0 1 14.5 7h-7A1.5 1.5 0 0 1 6 5.5" />
  </svg>
);
export default SvgRvTruck;
