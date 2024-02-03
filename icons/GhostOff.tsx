import * as React from "react";
import type { SVGProps } from "react";
const SvgGhostOff = ({
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
    className="icon icon-tabler icon-tabler-ghost-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8.794 4.776A7 7 0 0 1 19 11v4m-.12 3.898a1.78 1.78 0 0 1-2.98.502 1.65 1.65 0 0 0-2.6 0 1.65 1.65 0 0 1-2.6 0 1.65 1.65 0 0 0-2.6 0A1.78 1.78 0 0 1 5 18v-7c0-1.683.594-3.227 1.583-4.434M14 10h.01" />
    <path d="M10 14a3.5 3.5 0 0 0 4 0M3 3l18 18" />
  </svg>
);
export default SvgGhostOff;
