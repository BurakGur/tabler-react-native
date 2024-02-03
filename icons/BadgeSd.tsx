import * as React from "react";
import type { SVGProps } from "react";
const SvgBadgeSd = ({
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
    className="icon icon-tabler icon-tabler-badge-sd"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M14 9v6h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zM7 14.25c0 .414.336.75.75.75H9a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1.25a.75.75 0 0 1 .75.75" />
  </svg>
);
export default SvgBadgeSd;
