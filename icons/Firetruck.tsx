import * as React from "react";
import type { SVGProps } from "react";
const SvgFiretruck = ({
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
    className="icon icon-tabler icon-tabler-firetruck"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <path d="M7 18h8m4 0h2v-6a5 5 0 0 0-5-5h-1l1.5 5H21M12 18V7h3M3 17v-5h9M3 9l18-6M6 12V8" />
  </svg>
);
export default SvgFiretruck;
