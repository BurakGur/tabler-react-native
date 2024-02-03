import * as React from "react";
import type { SVGProps } from "react";
const SvgChartArrows = ({
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
    className="icon icon-tabler icon-tabler-chart-arrows"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 18h14M9 9l3 3-3 3M14 15l3 3-3 3M3 3v18M3 12h9M18 3l3 3-3 3M3 6h18" />
  </svg>
);
export default SvgChartArrows;
