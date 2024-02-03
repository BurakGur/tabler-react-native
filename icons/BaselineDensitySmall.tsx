import * as React from "react";
import type { SVGProps } from "react";
const SvgBaselineDensitySmall = ({
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
    className="icon icon-tabler icon-tabler-baseline-density-small"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 3h16M4 9h16M4 15h16M4 21h16" />
  </svg>
);
export default SvgBaselineDensitySmall;
