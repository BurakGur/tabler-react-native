import * as React from "react";
import type { SVGProps } from "react";
const SvgMilitaryRank = ({
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
    className="icon icon-tabler icon-tabler-military-rank"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17 7v13H7V7l5-3z" />
    <path d="m10 13 2-1 2 1M10 17l2-1 2 1M10 9l2-1 2 1" />
  </svg>
);
export default SvgMilitaryRank;
