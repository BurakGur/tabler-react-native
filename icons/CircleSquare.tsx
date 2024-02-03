import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleSquare = ({
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
    className="icon icon-tabler icon-tabler-circle-square"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 9.5a6.5 6.5 0 1 0 13 0 6.5 6.5 0 1 0-13 0" />
    <path d="M10 12a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2z" />
  </svg>
);
export default SvgCircleSquare;
