import * as React from "react";
import type { SVGProps } from "react";
const SvgRotateDot = ({
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
    className="icon icon-tabler icon-tabler-rotate-dot"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19.95 11a8 8 0 1 0-.5 4m.5 5v-5h-5" />
    <path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
  </svg>
);
export default SvgRotateDot;
