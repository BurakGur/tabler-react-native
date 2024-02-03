import * as React from "react";
import type { SVGProps } from "react";
const SvgBadgeWc = ({
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
    className="icon icon-tabler icon-tabler-badge-wc"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="m6.5 9 .5 6 2-4 2 4 .5-6M17 10.5a1.5 1.5 0 0 0-3 0v3a1.5 1.5 0 0 0 3 0" />
  </svg>
);
export default SvgBadgeWc;
