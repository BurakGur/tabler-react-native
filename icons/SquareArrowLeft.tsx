import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareArrowLeft = ({
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
    className="icon icon-tabler icon-tabler-square-arrow-left"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m12 8-4 4 4 4M16 12H8" />
    <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);
export default SvgSquareArrowLeft;
