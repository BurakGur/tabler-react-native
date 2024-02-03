import * as React from "react";
import type { SVGProps } from "react";
const SvgBadgeAr = ({
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
    className="icon icon-tabler icon-tabler-badge-ar"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M7 15v-4.5a1.5 1.5 0 0 1 3 0V15M7 13h3M14 12h1.5a1.5 1.5 0 0 0 0-3H14v6m3 0-2-3" />
  </svg>
);
export default SvgBadgeAr;
