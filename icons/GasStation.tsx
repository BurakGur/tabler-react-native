import * as React from "react";
import type { SVGProps } from "react";
const SvgGasStation = ({
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
    className="icon icon-tabler icon-tabler-gas-station"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0V9l-3-3M4 20V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14M3 20h12" />
    <path d="M18 7v1a1 1 0 0 0 1 1h1M4 11h10" />
  </svg>
);
export default SvgGasStation;
