import * as React from "react";
import type { SVGProps } from "react";
const SvgTimeDuration10 = ({
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
    className="icon icon-tabler icon-tabler-time-duration-10"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 9v6M12 11v2a2 2 0 1 0 4 0v-2a2 2 0 1 0-4 0M3 12v.01M21 12v.01M12 21v.01M7.5 4.2v.01M16.5 19.8v.01M7.5 19.8v.01M4.2 16.5v.01M19.8 16.5v.01M4.2 7.5v.01M19.81 7.527A9 9 0 0 0 12 3" />
  </svg>
);
export default SvgTimeDuration10;
