import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRampRight2 = ({
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
    className="icon icon-tabler icon-tabler-arrow-ramp-right-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 3v8.707M16 14l4-4-4-4" />
    <path d="M6 21c0-6.075 4.925-11 11-11h3" />
  </svg>
);
export default SvgArrowRampRight2;
