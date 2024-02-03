import * as React from "react";
import type { SVGProps } from "react";
const SvgChartScatter3D = ({
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
    className="icon icon-tabler icon-tabler-chart-scatter-3d"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m3 20 9-7M12 3v10l9 7M17 12v.015M17 4.015v.015M21 8.015v.015M12 19.015v.015M3 12.015v.015M7 8.015v.015M3 4.015v.015" />
  </svg>
);
export default SvgChartScatter3D;
