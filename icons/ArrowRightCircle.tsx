import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRightCircle = ({
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
    className="icon icon-tabler icon-tabler-arrow-right-circle"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m18 15 3-3-3-3M3 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M7 12h14" />
  </svg>
);
export default SvgArrowRightCircle;
