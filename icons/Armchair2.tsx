import * as React from "react";
import type { SVGProps } from "react";
const SvgArmchair2 = ({
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
    className="icon icon-tabler icon-tabler-armchair-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 10V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4" />
    <path d="M16 15v-2a3 3 0 1 1 3 3v3H5v-3a3 3 0 1 1 3-3v2M8 12h8M7 19v2M17 19v2" />
  </svg>
);
export default SvgArmchair2;
