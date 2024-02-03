import * as React from "react";
import type { SVGProps } from "react";
const SvgChartRadar = ({
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
    className="icon icon-tabler icon-tabler-chart-radar"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m12 3 9.5 7L18 21H6L2.5 10z" />
    <path d="m12 7.5 5.5 4L15 17H8.5l-2-5.5z" />
    <path d="m2.5 10 9.5 3 9.5-3" />
    <path d="M12 3v10l6 8M6 21l6-8" />
  </svg>
);
export default SvgChartRadar;
