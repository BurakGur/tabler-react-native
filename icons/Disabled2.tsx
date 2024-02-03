import * as React from "react";
import type { SVGProps } from "react";
const SvgDisabled2 = ({
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
    className="icon icon-tabler icon-tabler-disabled-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M9 11a5 5 0 1 0 3.95 7.95" />
    <path d="m19 20-4-5h-4l3-5-4-3-4 1" />
  </svg>
);
export default SvgDisabled2;
