import * as React from "react";
import type { SVGProps } from "react";
const SvgTrekking = ({
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
    className="icon icon-tabler icon-tabler-trekking"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M7 21l2-4M13 21v-4l-3-3 1-6 3 4 3 2" />
    <path d="m10 14-1.827-1.218a2 2 0 0 1-.831-2.15l.28-1.117A2 2 0 0 1 9.561 8H11l4 1 3-2M17 12v9M16 20h2" />
  </svg>
);
export default SvgTrekking;
