import * as React from "react";
import type { SVGProps } from "react";
const SvgCircuitBulb = ({
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
    className="icon icon-tabler icon-tabler-circuit-bulb"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M2 12h5M17 12h5M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0M8.5 8.5l7 7M15.5 8.5l-7 7" />
  </svg>
);
export default SvgCircuitBulb;
