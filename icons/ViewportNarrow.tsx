import * as React from "react";
import type { SVGProps } from "react";
const SvgViewportNarrow = ({
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
    className="icon icon-tabler icon-tabler-viewport-narrow"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12h7L7 9m0 6 3-3M21 12h-7l3-3m0 6-3-3M9 6V3h6v3M9 18v3h6v-3" />
  </svg>
);
export default SvgViewportNarrow;
