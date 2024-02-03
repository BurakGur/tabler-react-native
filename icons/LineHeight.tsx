import * as React from "react";
import type { SVGProps } from "react";
const SvgLineHeight = ({
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
    className="icon icon-tabler icon-tabler-line-height"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m3 8 3-3 3 3M3 16l3 3 3-3M6 5v14M13 6h7M13 12h7M13 18h7" />
  </svg>
);
export default SvgLineHeight;
