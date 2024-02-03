import * as React from "react";
import type { SVGProps } from "react";
const SvgChartCircles = ({
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
    className="icon icon-tabler icon-tabler-chart-circles"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 9.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0-11 0" />
    <path d="M9 14.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0-11 0" />
  </svg>
);
export default SvgChartCircles;
