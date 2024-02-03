import * as React from "react";
import type { SVGProps } from "react";
const SvgChartBarOff = ({
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
    className="icon icon-tabler icon-tabler-chart-bar-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM12 8h2a1 1 0 0 1 1 1v2m0 4v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9M15 11V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12m-1 3h-4a1 1 0 0 1-1-1v-4M4 20h14M3 3l18 18" />
  </svg>
);
export default SvgChartBarOff;
