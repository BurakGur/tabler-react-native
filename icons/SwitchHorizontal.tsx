import * as React from "react";
import type { SVGProps } from "react";
const SvgSwitchHorizontal = ({
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
    className="icon icon-tabler icon-tabler-switch-horizontal"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m16 3 4 4-4 4M10 7h10M8 13l-4 4 4 4M4 17h9" />
  </svg>
);
export default SvgSwitchHorizontal;
