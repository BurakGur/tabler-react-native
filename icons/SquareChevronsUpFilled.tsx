import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareChevronsUpFilled = ({
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
    className="icon icon-tabler icon-tabler-square-chevrons-up-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-6.387 10.21a1 1 0 0 0-1.32.083l-3 3-.083.094a1 1 0 0 0 .083 1.32l.094.083a1 1 0 0 0 1.32-.083L12 14.415l2.293 2.292.094.083a1 1 0 0 0 1.32-1.497l-3-3zm0-5a1 1 0 0 0-1.32.083l-3 3-.083.094a1 1 0 0 0 .083 1.32l.094.083a1 1 0 0 0 1.32-.083L12 9.415l2.293 2.292.094.083a1 1 0 0 0 1.32-1.497l-3-3z"
    />
  </svg>
);
export default SvgSquareChevronsUpFilled;
