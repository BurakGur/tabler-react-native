import * as React from "react";
import type { SVGProps } from "react";
const SvgChargingPile = ({
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
    className="icon icon-tabler icon-tabler-charging-pile"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m18 7-1 1M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0V9l-3-3M4 20V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14" />
    <path d="M9 11.5 7.5 14h3L9 16.5M3 20h12M4 8h10" />
  </svg>
);
export default SvgChargingPile;
