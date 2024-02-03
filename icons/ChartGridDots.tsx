import * as React from "react";
import type { SVGProps } from "react";
const SvgChartGridDots = ({
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
    className="icon icon-tabler icon-tabler-chart-grid-dots"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M16 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M8 18h8M18 20v1M18 3v1M6 20v1M6 10V3M12 3v18M18 8v8M8 12h13M21 6h-1M16 6H3M3 12h1M20 18h1M3 18h1M6 14v2" />
  </svg>
);
export default SvgChartGridDots;
