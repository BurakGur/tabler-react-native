import * as React from "react";
import type { SVGProps } from "react";
const SvgClockShare = ({
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
    className="icon icon-tabler icon-tabler-clock-share"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.943 13.016A9 9 0 1 0 12.028 21M16 22l5-5M21 21.5V17h-4.5" />
    <path d="M12 7v5l2 2" />
  </svg>
);
export default SvgClockShare;
