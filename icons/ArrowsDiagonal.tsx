import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsDiagonal = ({
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
    className="icon icon-tabler icon-tabler-arrows-diagonal"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 4h4v4M14 10l6-6M8 20H4v-4M4 20l6-6" />
  </svg>
);
export default SvgArrowsDiagonal;
