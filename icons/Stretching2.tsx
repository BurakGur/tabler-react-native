import * as React from "react";
import type { SVGProps } from "react";
const SvgStretching2 = ({
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
    className="icon icon-tabler icon-tabler-stretching-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0M6.5 21l3.5-5M5 11l7-2M16 21l-4-7V9l7-4" />
  </svg>
);
export default SvgStretching2;
