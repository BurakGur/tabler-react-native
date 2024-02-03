import * as React from "react";
import type { SVGProps } from "react";
const SvgExchange = ({
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
    className="icon icon-tabler icon-tabler-exchange"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <path d="M19 8v5a5 5 0 0 1-5 5h-3l3-3m0 6-3-3M5 16v-5a5 5 0 0 1 5-5h3l-3-3m0 6 3-3" />
  </svg>
);
export default SvgExchange;
