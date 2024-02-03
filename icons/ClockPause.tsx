import * as React from "react";
import type { SVGProps } from "react";
const SvgClockPause = ({
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
    className="icon icon-tabler icon-tabler-clock-pause"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.942 13.018a9 9 0 1 0-7.909 7.922" />
    <path d="M12 7v5l2 2M17 17v5M21 17v5" />
  </svg>
);
export default SvgClockPause;
