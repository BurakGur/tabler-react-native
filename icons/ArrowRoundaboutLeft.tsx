import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRoundaboutLeft = ({
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
    className="icon icon-tabler icon-tabler-arrow-roundabout-left"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 9h8a5 5 0 1 1 5 5v7" />
    <path d="M7 5 3 9l4 4" />
  </svg>
);
export default SvgArrowRoundaboutLeft;
