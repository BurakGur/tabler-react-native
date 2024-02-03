import * as React from "react";
import type { SVGProps } from "react";
const SvgChartDotsFilled = ({
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
    className="icon icon-tabler icon-tabler-chart-dots-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M3 2a1 1 0 0 1 1 1v17h17a1 1 0 0 1 .993.883L22 21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"
    />
    <path
      fill="currentColor"
      stroke="none"
      d="M19 4a3 3 0 1 1-.651 5.93l-2.002 3.202a3 3 0 1 1-4.927.337l-1.378-1.655a3 3 0 1 1 1.538-1.282l1.378 1.654a3 3 0 0 1 1.693-.115l2.002-3.203A3 3 0 0 1 19 4"
    />
  </svg>
);
export default SvgChartDotsFilled;
