import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareRoundedChevronRight = ({
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
    className="icon icon-tabler icon-tabler-square-rounded-chevron-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m11 9 3 3-3 3" />
    <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" />
  </svg>
);
export default SvgSquareRoundedChevronRight;
