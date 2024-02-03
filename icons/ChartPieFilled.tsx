import * as React from "react";
import type { SVGProps } from "react";
const SvgChartPieFilled = ({
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
    className="icon icon-tabler icon-tabler-chart-pie-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M9.883 2.207a1.9 1.9 0 0 1 2.087 1.522l.025.167L12 4v7a1 1 0 0 0 .883.993L13 12h6.8a2 2 0 0 1 2 2 1 1 0 0 1-.026.226A10 10 0 1 1 9.504 2.293l.27-.067.11-.02z"
    />
    <path
      fill="currentColor"
      stroke="none"
      d="M14 3.5V9a1 1 0 0 0 1 1h5.5a1 1 0 0 0 .943-1.332 10 10 0 0 0-6.11-6.111A1 1 0 0 0 14 3.5"
    />
  </svg>
);
export default SvgChartPieFilled;
