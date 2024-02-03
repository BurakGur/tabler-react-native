import * as React from "react";
import type { SVGProps } from "react";
const SvgChartDots2 = ({
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
    className="icon icon-tabler icon-tabler-chart-dots-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 3v18h18" />
    <path d="M7 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0M11 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M16 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M21 3l-6 1.5M14.113 6.65l2.771 3.695M16 12.5l-5 2" />
  </svg>
);
export default SvgChartDots2;
