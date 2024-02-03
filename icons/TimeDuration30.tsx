import * as React from "react";
import type { SVGProps } from "react";
const SvgTimeDuration30 = ({
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
    className="icon icon-tabler icon-tabler-time-duration-30"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-3 0M8 9h1.5a1.5 1.5 0 0 1 0 3H9h.5a1.5 1.5 0 0 1 0 3H8M3 12v.01M7.5 4.2v.01M7.5 19.8v.01M4.2 16.5v.01M4.2 7.5v.01" />
    <path d="M12 21a9 9 0 0 0 0-18" />
  </svg>
);
export default SvgTimeDuration30;
