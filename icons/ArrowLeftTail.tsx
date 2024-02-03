import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLeftTail = ({
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
    className="icon icon-tabler icon-tabler-arrow-left-tail"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18 12H3M6 9l-3 3 3 3M21 9l-3 3 3 3" />
  </svg>
);
export default SvgArrowLeftTail;
