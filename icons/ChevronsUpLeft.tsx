import * as React from "react";
import type { SVGProps } from "react";
const SvgChevronsUpLeft = ({
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
    className="icon icon-tabler icon-tabler-chevrons-up-left"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 15V7h8M11 19v-8h8" />
  </svg>
);
export default SvgChevronsUpLeft;
