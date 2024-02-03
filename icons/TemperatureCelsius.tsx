import * as React from "react";
import type { SVGProps } from "react";
const SvgTemperatureCelsius = ({
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
    className="icon icon-tabler icon-tabler-temperature-celsius"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0M20 9a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3" />
  </svg>
);
export default SvgTemperatureCelsius;
