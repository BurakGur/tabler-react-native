import * as React from "react";
import type { SVGProps } from "react";
const SvgEarOff = ({
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
    className="icon icon-tabler icon-tabler-ear-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 10c0-1.146.277-2.245.78-3.219m1.792-2.208A7 7 0 0 1 19 13.6a10 10 0 0 1-.633.762m-2.045 1.96A8 8 0 0 0 15 18.6 4.5 4.5 0 0 1 8.2 20" />
    <path d="M11.42 7.414a3 3 0 0 1 4.131 4.13M3 3l18 18" />
  </svg>
);
export default SvgEarOff;
