import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRampLeft3 = ({
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
    className="icon icon-tabler icon-tabler-arrow-ramp-left-3"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18 3v6M8 16l-4-4 4-4" />
    <path d="M18 21v-6a3 3 0 0 0-3-3H4" />
  </svg>
);
export default SvgArrowRampLeft3;
