import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRightRhombus = ({
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
    className="icon icon-tabler icon-tabler-arrow-right-rhombus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 12h13M18 9l3 3-3 3M5.5 9.5 3 12l2.5 2.5L8 12z" />
  </svg>
);
export default SvgArrowRightRhombus;
