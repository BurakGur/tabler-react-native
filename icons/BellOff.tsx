import * as React from "react";
import type { SVGProps } from "react";
const SvgBellOff = ({
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
    className="icon icon-tabler icon-tabler-bell-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9.346 5.353Q9.661 5.16 10 5a2 2 0 1 1 4 0 7 7 0 0 1 4 6v3m-1 3H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 1.273-3.707M9 17v1a3 3 0 0 0 6 0v-1M3 3l18 18" />
  </svg>
);
export default SvgBellOff;
