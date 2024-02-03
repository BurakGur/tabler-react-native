import * as React from "react";
import type { SVGProps } from "react";
const SvgChartAreaLine = ({
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
    className="icon icon-tabler icon-tabler-chart-area-line"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m4 19 4-6 4 2 4-5 4 4v5zM4 12l3-4 4 2 5-6 4 4" />
  </svg>
);
export default SvgChartAreaLine;
