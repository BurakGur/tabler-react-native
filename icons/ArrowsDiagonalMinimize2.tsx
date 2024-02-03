import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsDiagonalMinimize2 = ({
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
    className="icon icon-tabler icon-tabler-arrows-diagonal-minimize-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18 10h-4V6M20 4l-6 6M6 14h4v4M10 14l-6 6" />
  </svg>
);
export default SvgArrowsDiagonalMinimize2;
