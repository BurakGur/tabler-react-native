import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpRhombus = ({
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
    className="icon icon-tabler icon-tabler-arrow-up-rhombus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 16V3M15 6l-3-3-3 3M14.5 18.5 12 21l-2.5-2.5L12 16z" />
  </svg>
);
export default SvgArrowUpRhombus;
