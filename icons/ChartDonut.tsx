import * as React from "react";
import type { SVGProps } from "react";
const SvgChartDonut = ({
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
    className="icon icon-tabler icon-tabler-chart-donut"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 3.2A9 9 0 1 0 20.8 14a1 1 0 0 0-1-1H16a4.1 4.1 0 1 1-5-5V4a.9.9 0 0 0-1-.8" />
    <path d="M15 3.5A9 9 0 0 1 20.5 9H16a9 9 0 0 0-1-1z" />
  </svg>
);
export default SvgChartDonut;
