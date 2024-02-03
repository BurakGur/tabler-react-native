import * as React from "react";
import type { SVGProps } from "react";
const SvgBorderCorners = ({
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
    className="icon icon-tabler icon-tabler-border-corners"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2M4 8V6a2 2 0 0 1 2-2h2" />
  </svg>
);
export default SvgBorderCorners;
