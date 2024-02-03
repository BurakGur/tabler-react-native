import * as React from "react";
import type { SVGProps } from "react";
const SvgChartBubble = ({
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
    className="icon icon-tabler icon-tabler-chart-bubble"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0M14 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10 7.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0" />
  </svg>
);
export default SvgChartBubble;
