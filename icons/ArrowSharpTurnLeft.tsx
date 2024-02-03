import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowSharpTurnLeft = ({
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
    className="icon icon-tabler icon-tabler-arrow-sharp-turn-left"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17 18V6.69a.7.7 0 0 0-1.195-.495L6 16" />
    <path d="M11 16H6v-5" />
  </svg>
);
export default SvgArrowSharpTurnLeft;
