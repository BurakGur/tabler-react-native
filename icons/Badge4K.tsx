import * as React from "react";
import type { SVGProps } from "react";
const SvgBadge4K = ({
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
    className="icon icon-tabler icon-tabler-badge-4k"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M7 9v2a1 1 0 0 0 1 1h1M10 9v6M14 9v6M17 9l-2 3 2 3M15 12h-1" />
  </svg>
);
export default SvgBadge4K;
