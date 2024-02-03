import * as React from "react";
import type { SVGProps } from "react";
const SvgDisabledOff = ({
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
    className="icon icon-tabler icon-tabler-disabled-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 7a2 2 0 1 0-2-2M11 11v4h4l4 5M15 11h1M7 11.5a5 5 0 1 0 6 7.5M3 3l18 18" />
  </svg>
);
export default SvgDisabledOff;
