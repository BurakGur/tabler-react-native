import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLeftCircle = ({
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
    className="icon icon-tabler icon-tabler-arrow-left-circle"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17 12H3M6 9l-3 3 3 3M17 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
  </svg>
);
export default SvgArrowLeftCircle;
