import * as React from "react";
import type { SVGProps } from "react";
const SvgChartArcs3 = ({
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
    className="icon icon-tabler icon-tabler-chart-arcs-3"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
    <path d="M7 12a5 5 0 1 0 5-5" />
    <path d="M6.29 18.957A9 9 0 1 0 12 3" />
  </svg>
);
export default SvgChartArcs3;
