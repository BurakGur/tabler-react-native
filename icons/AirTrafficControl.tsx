import * as React from "react";
import type { SVGProps } from "react";
const SvgAirTrafficControl = ({
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
    className="icon icon-tabler icon-tabler-air-traffic-control"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 3h2M12 3v3M5.998 6h12.004a2 2 0 0 1 1.916 2.575l-1.8 6A2 2 0 0 1 16.202 16H7.798a2 2 0 0 1-1.916-1.425l-1.8-6A2 2 0 0 1 5.998 6" />
    <path d="M8.5 6 10 16v5M15.5 6 14 16v5" />
  </svg>
);
export default SvgAirTrafficControl;
