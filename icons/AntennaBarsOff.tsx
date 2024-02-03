import * as React from "react";
import type { SVGProps } from "react";
const SvgAntennaBarsOff = ({
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
    className="icon icon-tabler icon-tabler-antenna-bars-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 18v-3M10 18v-6M14 18v-4M14 10V9M18 14V6M3 3l18 18" />
  </svg>
);
export default SvgAntennaBarsOff;
