import * as React from "react";
import type { SVGProps } from "react";
const SvgCoinTaka = ({
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
    className="icon icon-tabler icon-tabler-coin-taka"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m8 8 .553-.276A1 1 0 0 1 10 8.618V15a2 2 0 0 0 2 2h.5a2.5 2.5 0 0 0 2.5-2.5V14h-1M8 11h7" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
  </svg>
);
export default SvgCoinTaka;
