import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownSquare = ({
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
    className="icon icon-tabler icon-tabler-arrow-down-square"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 7v14M9 18l3 3 3-3M14 3v4h-4V3z" />
  </svg>
);
export default SvgArrowDownSquare;
