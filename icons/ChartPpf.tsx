import * as React from "react";
import type { SVGProps } from "react";
const SvgChartPpf = ({
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
    className="icon icon-tabler icon-tabler-chart-ppf"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19 17c0-6.075-5.373-11-12-11M3 3v18h18" />
  </svg>
);
export default SvgChartPpf;
