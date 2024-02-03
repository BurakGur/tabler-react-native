import * as React from "react";
import type { SVGProps } from "react";
const SvgArmchair2Off = ({
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
    className="icon icon-tabler icon-tabler-armchair-2-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 10V6a3 3 0 0 1 .128-.869m2.038-2.013Q7.564 3.001 8 3h8a3 3 0 0 1 3 3v4" />
    <path d="M16.124 12.145a3 3 0 1 1 3.756 3.724M19 19H5v-3a3 3 0 1 1 3-3v2M8 12h4M7 19v2M17 19v2M3 3l18 18" />
  </svg>
);
export default SvgArmchair2Off;
