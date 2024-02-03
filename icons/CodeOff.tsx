import * as React from "react";
import type { SVGProps } from "react";
const SvgCodeOff = ({
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
    className="icon icon-tabler icon-tabler-code-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m7 8-4 4 4 4M17 8l4 4-2.5 2.5M14 4l-1.201 4.805m-.802 3.207-2 7.988M3 3l18 18" />
  </svg>
);
export default SvgCodeOff;
