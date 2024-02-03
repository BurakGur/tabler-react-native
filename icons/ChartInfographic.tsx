import * as React from "react";
import type { SVGProps } from "react";
const SvgChartInfographic = ({
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
    className="icon icon-tabler icon-tabler-chart-infographic"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 7a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
    <path d="M7 3v4h4M9 17v4M17 14v7M13 13v8M21 12v9" />
  </svg>
);
export default SvgChartInfographic;
