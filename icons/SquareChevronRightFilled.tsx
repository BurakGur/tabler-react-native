import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareChevronRightFilled = ({
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
    className="icon icon-tabler icon-tabler-square-chevron-right-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-7.387 6.21a1 1 0 0 0-1.32.083l-.083.094a1 1 0 0 0 .083 1.32L12.585 12l-2.292 2.293-.083.094a1 1 0 0 0 1.497 1.32l3-3 .083-.094a1 1 0 0 0-.083-1.32l-3-3z"
    />
  </svg>
);
export default SvgSquareChevronRightFilled;
