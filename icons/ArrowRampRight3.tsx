import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRampRight3 = ({
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
    className="icon icon-tabler icon-tabler-arrow-ramp-right-3"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 3v6M16 16l4-4-4-4" />
    <path d="M6 21v-6a3 3 0 0 1 3-3h11" />
  </svg>
);
export default SvgArrowRampRight3;
