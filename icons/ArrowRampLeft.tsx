import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRampLeft = ({
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
    className="icon icon-tabler icon-tabler-arrow-ramp-left"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17 3v8.707M13 7l4-4 4 4M7 14l-4-4 4-4" />
    <path d="M17 21A11 11 0 0 0 6 10H3" />
  </svg>
);
export default SvgArrowRampLeft;
