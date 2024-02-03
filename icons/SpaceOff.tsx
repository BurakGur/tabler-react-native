import * as React from "react";
import type { SVGProps } from "react";
const SvgSpaceOff = ({
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
    className="icon icon-tabler icon-tabler-space-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 10v3a1 1 0 0 0 1 1h9m4 0h1a1 1 0 0 0 1-1v-3M3 3l18 18" />
  </svg>
);
export default SvgSpaceOff;
