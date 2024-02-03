import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRampLeft2 = ({
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
    className="icon icon-tabler icon-tabler-arrow-ramp-left-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18 3v8.707M8 14l-4-4 4-4" />
    <path d="M18 21c0-6.075-4.925-11-11-11H4" />
  </svg>
);
export default SvgArrowRampLeft2;
