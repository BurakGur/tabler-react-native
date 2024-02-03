import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeglass2 = ({
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
    className="icon icon-tabler icon-tabler-eyeglass-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 4H6L3 14v2.5M16 4h2l3 10v2.5M10 16h4" />
    <path d="M14 16.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0M3 16.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0" />
  </svg>
);
export default SvgEyeglass2;
