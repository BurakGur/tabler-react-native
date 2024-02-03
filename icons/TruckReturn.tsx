import * as React from "react";
import type { SVGProps } from "react";
const SvgTruckReturn = ({
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
    className="icon icon-tabler icon-tabler-truck-return"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <path d="M5 17H3V6a1 1 0 0 1 1-1h9v6H8l2 2m0-4-2 2M9 17h6M13 6h5l3 5v6h-2" />
  </svg>
);
export default SvgTruckReturn;
