import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRightTail = ({
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
    className="icon icon-tabler icon-tabler-arrow-right-tail"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m18 15 3-3-3-3M3 15l3-3-3-3M6 12h15" />
  </svg>
);
export default SvgArrowRightTail;
