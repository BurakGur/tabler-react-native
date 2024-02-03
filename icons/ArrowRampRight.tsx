import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRampRight = ({
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
    className="icon icon-tabler icon-tabler-arrow-ramp-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 3v8.707M11 7 7 3 3 7M17 14l4-4-4-4" />
    <path d="M7 21a11 11 0 0 1 11-11h3" />
  </svg>
);
export default SvgArrowRampRight;
