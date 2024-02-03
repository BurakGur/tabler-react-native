import * as React from "react";
import type { SVGProps } from "react";
const SvgSunset = ({
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
    className="icon icon-tabler icon-tabler-sunset"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 17h1m16 0h1M5.6 10.6l.7.7m12.1-.7-.7.7M8 17a4 4 0 0 1 8 0M3 21h18M12 3v6l3-3M9 6l3 3" />
  </svg>
);
export default SvgSunset;
