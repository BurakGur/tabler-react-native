import * as React from "react";
import type { SVGProps } from "react";
const SvgFlagShare = ({
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
    className="icon icon-tabler icon-tabler-flag-share"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13.13 14.833A5 5 0 0 1 12 14a5 5 0 0 0-7 0V5a5 5 0 0 1 7 0 5 5 0 0 0 7 0v8M5 21v-7M16 22l5-5M21 21.5V17h-4.5" />
  </svg>
);
export default SvgFlagShare;
