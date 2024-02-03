import * as React from "react";
import type { SVGProps } from "react";
const SvgFlagDown = ({
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
    className="icon icon-tabler icon-tabler-flag-down"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14.434 15.315A5 5 0 0 1 12 14a5 5 0 0 0-7 0V5a5 5 0 0 1 7 0 5 5 0 0 0 7 0v7M5 21v-7M19 16v6M22 19l-3 3-3-3" />
  </svg>
);
export default SvgFlagDown;
