import * as React from "react";
import type { SVGProps } from "react";
const SvgViewportWide = ({
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
    className="icon icon-tabler icon-tabler-viewport-wide"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 12H3l3-3m0 6-3-3M14 12h7l-3-3m0 6 3-3M3 6V3h18v3M3 18v3h18v-3" />
  </svg>
);
export default SvgViewportWide;
