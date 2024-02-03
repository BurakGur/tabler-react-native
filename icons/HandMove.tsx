import * as React from "react";
import type { SVGProps } from "react";
const SvgHandMove = ({
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
    className="icon icon-tabler icon-tabler-hand-move"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 13V4.5a1.5 1.5 0 0 1 3 0V12M11 11.5v-2a1.5 1.5 0 0 1 3 0V12M14 10.5a1.5 1.5 0 0 1 3 0V12" />
    <path d="M17 11.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2 .208a6 6 0 0 1-5.012-2.7L7 19q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022 1.87 1.87 0 0 1 2.28.28L8 13M2.541 5.594a13.5 13.5 0 0 1 2.46-1.427M14 3.458a13.4 13.4 0 0 1 3.685 1.612" />
  </svg>
);
export default SvgHandMove;
