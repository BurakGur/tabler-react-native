import * as React from "react";
import type { SVGProps } from "react";
const SvgBarrel = ({
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
    className="icon icon-tabler icon-tabler-barrel"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7.278 4h9.444a2 2 0 0 1 1.841 1.22Q20 8.61 20 12t-1.437 6.78A2 2 0 0 1 16.722 20H7.278a2 2 0 0 1-1.841-1.22Q4 15.39 4 12t1.437-6.78A2 2 0 0 1 7.278 4" />
    <path d="M14 4q1 4 1 8c0 4-.333 5.333-1 8M10 4q-1 4-1 8c0 4 .333 5.333 1 8M4.5 16h15M19.5 8h-15" />
  </svg>
);
export default SvgBarrel;
