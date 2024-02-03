import * as React from "react";
import type { SVGProps } from "react";
const SvgVectorBezier = ({
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
    className="icon icon-tabler icon-tabler-vector-bezier"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM17 15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM10 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM10 8.5A6 6 0 0 0 5 14M14 8.5a6 6 0 0 1 5 5.5M10 8H4M20 8h-6M2 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0M20 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
  </svg>
);
export default SvgVectorBezier;
