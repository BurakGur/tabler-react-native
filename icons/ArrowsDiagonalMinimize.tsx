import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsDiagonalMinimize = ({
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
    className="icon icon-tabler icon-tabler-arrows-diagonal-minimize"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 10h4V6M4 4l6 6M18 14h-4v4M14 14l6 6" />
  </svg>
);
export default SvgArrowsDiagonalMinimize;
