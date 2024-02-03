import * as React from "react";
import type { SVGProps } from "react";
const SvgChartScatter = ({
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
    className="icon icon-tabler icon-tabler-chart-scatter"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 3v18h18M8 15.015v.015M16 16.015v.015M8 7.03v.015M12 11.03v.015M19 11.03v.015" />
  </svg>
);
export default SvgChartScatter;
