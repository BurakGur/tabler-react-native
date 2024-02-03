import * as React from "react";
import type { SVGProps } from "react";
const SvgTimeDuration60 = ({
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
    className="icon icon-tabler icon-tabler-time-duration-60"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-3 0M11 9H9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H8" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
  </svg>
);
export default SvgTimeDuration60;
