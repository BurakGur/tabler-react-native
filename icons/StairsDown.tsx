import * as React from "react";
import type { SVGProps } from "react";
const SvgStairsDown = ({
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
    className="icon icon-tabler icon-tabler-stairs-down"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M22 21h-5v-5h-5v-5H7V6H2M18 3v7M15 7l3 3 3-3" />
  </svg>
);
export default SvgStairsDown;
