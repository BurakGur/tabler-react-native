import * as React from "react";
import type { SVGProps } from "react";
const SvgChartHistogram = ({
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
    className="icon icon-tabler icon-tabler-chart-histogram"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 3v18h18M20 18v3M16 16v5M12 13v8M8 16v5" />
    <path d="M3 11c6 0 5-5 9-5s3 5 9 5" />
  </svg>
);
export default SvgChartHistogram;
