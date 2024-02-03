import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLeftRhombus = ({
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
    className="icon icon-tabler icon-tabler-arrow-left-rhombus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 12H3M6 9l-3 3 3 3M18.5 9.5 21 12l-2.5 2.5L16 12z" />
  </svg>
);
export default SvgArrowLeftRhombus;
