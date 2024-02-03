import * as React from "react";
import type { SVGProps } from "react";
const SvgChartArrowsVertical = ({
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
    className="icon icon-tabler icon-tabler-chart-arrows-vertical"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18 21V7M9 15l3-3 3 3M15 10l3-3 3 3M3 21h18M12 21v-9M3 6l3-3 3 3M6 21V3" />
  </svg>
);
export default SvgChartArrowsVertical;
