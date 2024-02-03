import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareRoundedPercentage = ({
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
    className="icon icon-tabler icon-tabler-square-rounded-percentage"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9M9 15.075l6-6M9 9.105v.015M15 15.12v.015" />
  </svg>
);
export default SvgSquareRoundedPercentage;
