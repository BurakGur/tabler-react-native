import * as React from "react";
import type { SVGProps } from "react";
const SvgDoorOff = ({
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
    className="icon icon-tabler icon-tabler-door-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 21h18M6 21V6M7.18 3.175C7.43 3.063 7.708 3 8 3h8a2 2 0 0 1 2 2v9M18 18v3M3 3l18 18" />
  </svg>
);
export default SvgDoorOff;
