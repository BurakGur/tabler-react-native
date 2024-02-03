import * as React from "react";
import type { SVGProps } from "react";
const SvgWheelchair = ({
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
    className="icon icon-tabler icon-tabler-wheelchair"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 16a5 5 0 1 0 10 0 5 5 0 1 0-10 0M17 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <path d="M19 17a3 3 0 0 0-3-3h-3.4M3 3h1a2 2 0 0 1 2 2v6M6 8h11M15 8v6" />
  </svg>
);
export default SvgWheelchair;
