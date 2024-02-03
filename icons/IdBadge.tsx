import * as React from "react";
import type { SVGProps } from "react";
const SvgIdBadge = ({
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
    className="icon icon-tabler icon-tabler-id-badge"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z" />
    <path d="M10 13a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10 6h4M9 18h6" />
  </svg>
);
export default SvgIdBadge;
