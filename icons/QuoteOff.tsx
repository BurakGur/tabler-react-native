import * as React from "react";
import type { SVGProps } from "react";
const SvgQuoteOff = ({
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
    className="icon icon-tabler icon-tabler-quote-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1m4 4v3q0 4-4 5M19 11h-4m-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6q0 .99-.245 1.798m-1.653 2.29q-.857.6-2.102.912M3 3l18 18" />
  </svg>
);
export default SvgQuoteOff;
