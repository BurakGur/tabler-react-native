import * as React from "react";
import type { SVGProps } from "react";
const SvgChartDonut4 = ({
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
    className="icon icon-tabler icon-tabler-chart-donut-4"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8.848 14.667 5.5 17.5M12 3v5m4 4h5M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0M14.219 15.328 17 19.5" />
    <path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
  </svg>
);
export default SvgChartDonut4;
